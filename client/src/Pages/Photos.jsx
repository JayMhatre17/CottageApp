import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
  getError,
} from '../utils';
import { toast } from 'react-toastify';
import { Button, Label, Modal, Select } from 'flowbite-react';
import { FcAddImage, FcNext, FcPrevious } from 'react-icons/fc';
import { MdClose, MdCloudUpload } from 'react-icons/md';
import axios from 'axios';
import { Store } from '../Store';
import MessageBox from '../components/MessageBox';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Link, useLocation } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, images: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true, createSuccess: false };
    case 'CREATE_SUCCESS':
      return {
        ...state,
        loadingCreate: false,
        createSuccess: true,
      };
    case 'CREATE_FAILED':
      return {
        ...state,
        loadingCreate: false,
        errorCreate: action.payload,
      };
    case 'CREATE_RESET':
      return { ...state, loadingCreate: false, createSuccess: false };
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true, updateSuccess: false };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false, updateSuccess: true };
    case 'UPDATE_FAILED':
      return { ...state, loadingUpdate: false, errorUpdate: action.payload };
    case 'UPDATE_RESET':
      return { ...state, loadingCreate: false, updateSuccess: false };
    default:
      return state;
  }
};

const Photos = () => {
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const category = sp.get('category') || 'all';

  const [newImagePath, setNewImagePath] = useState('');
  const [newImage, setNewImage] = useState({});
  const [imageCategory, setImageCategory] = useState('');
  const [openEditModal, setOpenEditModal] = useState(null);
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [
    {
      images,
      error,
      loading,
      loadingCreate,
      errorCreate,
      createSuccess,
      updateSuccess,
    },
    dispatch,
  ] = useReducer(reducer, {
    images: [],
    loadingCreate: false,
    errorCreate: '',
    createSuccess: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get(
          `/api/photos/search/images?&category=${category}`
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILED', payload: getError(error) });
        toast.error(getError(error), { position: 'top-center' });
      }
    };
    if (createSuccess || updateSuccess) {
      if (createSuccess) {
        dispatch({ type: 'CREATE_RESET' });
      }
      if (updateSuccess) {
        dispatch({ type: 'UPDATE_RESET' });
      }
    } else {
      fetchData();
    }
  }, [category, createSuccess, updateSuccess]);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get('/api/photos/search/categories');
        setCategories(data);
      } catch (error) {
        toast.error(getError(error), { position: 'top-center' });
      }
    };
    fetchCategories();
  }, []);

  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    return `/photos?category=${filterCategory}`;
  };

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: CLOUDINARY_CLOUD_NAME,
        uploadPreset: CLOUDINARY_UPLOAD_PRESET,
        mutiple: false,
        showUploadMoreButton: false,
        folder: `JayPrabha-webapp/photos`,
        clientAllowedFormats: ['image'],
        sources: ['local', 'url', 'camera', 'google_drive'],
      },
      function (error, result) {
        if (result.event === 'success') {
          setNewImagePath(result.info.secure_url);
        }
        if (error) {
          toast.error(getError(error), { position: 'top-center' });
        }
      }
    );
  }, [newImagePath]);

  const createHandler = async () => {
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const { data } = await axios.post(
        '/api/photos',
        {},
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      toast.success('New image is Created.', { position: 'top-center' });
      dispatch({ type: 'CREATE_SUCCESS', payload: data });
      setNewImage(data.newImage);
      setNewImagePath(data.newImage.path);
      setImageCategory(data.newImage.category);
      setOpenEditModal(data.newImage._id);
    } catch (error) {
      dispatch({ type: 'CREATE_FAILED' });
      toast.error(getError(error), { position: 'top-center' });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(
        `/api/photos/${newImage._id}`,
        { path: newImagePath, category: imageCategory },
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: 'UPDATE_SUCCESS' });
      toast.success('Image updated successfully.', { position: 'top-center' });
      setOpenEditModal(false);
      setNewImagePath('');
    } catch (error) {
      toast.error(getError(error), { position: 'top-center' });
      dispatch({ type: 'UPDATE_FAILED', payload: getError(error) });
    }
  };

  const [data, setData] = useState({ img: '', i: 0 });
  const ViewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === 'next-img') {
      setData({
        img: images[i + 1].path,
        i: i + 1,
      });
    }
    if (action === 'previous-img') {
      setData({
        img: images[i - 1].path,
        i: i - 1,
      });
    }
    if (!action) {
      setData({ img: '', i: 0 });
    }
  };

  return (
    <>
      <div className="admin-actions | my-2 p-2 flex flex-col justify-center items-center">
        {errorCreate ? (
          <MessageBox
            color={'failure'}
            text={getError(errorCreate)}
          ></MessageBox>
        ) : (
          <>
            {' '}
            {userInfo && userInfo.isAdmin && (
              <Button
                gradientDuoTone="pinkToOrange"
                className="ms-auto"
                onClick={() => {
                  createHandler();
                }}
                disabled={loadingCreate}
              >
                <FcAddImage className="text-2xl"></FcAddImage>
                <div className="text ms-1">Add Image</div>
              </Button>
            )}
            <Modal
              show={openEditModal === newImage._id}
              size="md"
              popup
              onClose={() => setOpenEditModal(null)}
            >
              <Modal.Header></Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <div className="text-lg text-gray-900 dark:text-white text-center font-bold font-serif">
                    Edit Image
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <img
                        src={newImagePath}
                        alt={newImage.category}
                        className="max-h-[250px] w-auto mx-auto rounded-md"
                      />
                    </div>
                  </div>
                  <form onSubmit={submitHandler}>
                    <div>
                      <div className="mb-2 block">
                        <Button
                          type="button"
                          gradientDuoTone="pinkToOrange"
                          className="w-full font-semibold"
                          onClick={() => widgetRef.current.open()}
                        >
                          <MdCloudUpload className="text-2xl"></MdCloudUpload>
                          <span className="ms-2">Upload Image</span>
                        </Button>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <div className="mb-2 block">
                          <Label htmlFor="category" value="Category" />
                        </div>
                        <Select
                          id="category"
                          required
                          defaultValue={imageCategory}
                          onChange={(e) => {
                            setImageCategory(e.target.value);
                          }}
                        >
                          <option>Gadren</option>
                          <option>Dishes</option>
                          <option>Utilities</option>
                          <option>Rooms</option>
                        </Select>
                      </div>
                    </div>
                    <div className="my-2">
                      <Button
                        pill
                        type="submit"
                        color="blue"
                        className="mx-auto px-6"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </Modal.Body>
            </Modal>
          </>
        )}
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 3xl:max-w-[1400px]">
          <nav>
            <ul className="nav-tab | mt-5 list-none flex flex-wrap justify-center items-center">
              <li
                className={`tab-item | px-5 py-3 font-medium capitalize text-sm text-center rounded-md md:min-h-0 flex items-center ${
                  'all' === category ? 'text-[#4f4ffc] tab-item-active' : ''
                }`}
              >
                <Link to={getFilterUrl({ category: 'all' })}>All Images</Link>
              </li>
              {categories.map((c) => (
                <li
                  key={c}
                  className={`tab-item | px-5 py-3 font-medium capitalize text-sm text-center rounded-md flex items-center  ${
                    c === category ? 'text-[#4f4ffc] tab-item-active' : ''
                  }`}
                >
                  <Link to={getFilterUrl({ category: c })}>{c}</Link>
                </li>
              ))}
            </ul>
          </nav>{' '}
        </div>

        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox color={'failure'} text={getError(error)}></MessageBox>
        ) : (
          <>
            <div className="p-5 w-full">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry gutter="1.25rem">
                  {images.map((image, i) => (
                    <img
                      key={i}
                      src={image.path}
                      style={{
                        width: '100%',
                        display: 'block',
                        cursor: 'pointer',
                      }}
                      alt={image.category}
                      onClick={() => {
                        ViewImage(image.path, i);
                      }}
                    />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>

            {/* for viewing image in fullscreen */}
            {data.img && (
              <div className="top-0 w-full h-screen bg-black fixed flex justify-center items-center overflow-hidden z-[70] text-white select-none">
                <button
                  className={`text-3xl md:me-4 hover:opacity-75 ${
                    !data.i ? 'hidden' : 'block'
                  }`}
                  onClick={() => imgAction('previous-img')}
                  disabled={!data.i}
                >
                  <FcPrevious />
                </button>
                <img
                  src={data.img}
                  alt=""
                  className="w-auto max-w-[85%] max-h-[90vh]"
                />
                <button
                  className={`text-3xl md:ms-4 hover:opacity-75 ${
                    data.i + 1 === images.length ? 'hidden' : 'block'
                  }`}
                  onClick={() => imgAction('next-img')}
                  disabled={data.i + 1 === images.length}
                >
                  <FcNext />
                </button>
                <div className="image-count | absolute z-10 bottom-4 right-3 rounded-full p-1 tracking-wider">
                  {data.i + 1 + '/' + images.length}
                </div>
                <button
                  className="absolute top-3 right-3 text-3xl"
                  onClick={() => imgAction()}
                >
                  <MdClose />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default Photos;
