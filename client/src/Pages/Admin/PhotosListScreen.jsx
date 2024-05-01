import axios from "axios";
import { Button, Label, Modal, Select, Table } from "flowbite-react";
import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
  getError,
} from "../../utils";
import { toast } from "react-toastify";
import { FaTrashCan } from "react-icons/fa6";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import { PiTrashDuotone } from "react-icons/pi";
import { Store } from "../../Store";
import { MdCloudUpload } from "react-icons/md";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, images: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, error: action.payload, loading: false };
    case "UPDATE_REQUEST":
      return { ...state, loadingUpdate: true, successUpdate: false };
    case "UPDATE_SUCCESS":
      return { ...state, loadingUpdate: false, successUpdate: true };
    case "UPDATE_FAILED":
      return { ...state, loadingUpdate: false, errorUpdate: action.payload };
    case "UPDATE_RESET":
      return { ...state, loadingDelete: false, successUpdate: false };
    case "DELETE_REQUEST":
      return { ...state, loadingDelete: true, successDelete: false };
    case "DELETE_SUCCESS":
      return {
        ...state,
        loadingDelete: false,
        successDelete: true,
      };
    case "DELETE_FAIL":
      return { ...state, loadingDelete: false };
    case "DELETE_RESET":
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      break;
  }
};

export default function PhotosListScreen() {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [openDeleteModal, setOpenDeleteModal] = useState(0);
  const [imageCategory, setImageCategory] = useState("");
  const [openEditModal, setOpenEditModal] = useState(0);
  const [newImagePath, setNewImagePath] = useState("");

  const [
    { images, error, loading, loadingDelete, successDelete, successUpdate },
    dispatch,
  ] = useReducer(reducer, {
    images: [],
    error: false,
    loading: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/photos/images`);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAILED", payload: getError(error) });
        toast.error(getError(error), { position: "top-center" });
      }
    };
    if (successDelete || successUpdate) {
      if (successDelete) {
        dispatch({ type: "DELETE_RESET" });
      }
      if (successUpdate) {
        dispatch({ type: "UPDATE_RESET" });
      }
    } else {
      fetchData();
    }
  }, [successDelete, successUpdate]);

  const editHandler = async (e, imageID) => {
    e.preventDefault();
    try {
      dispatch({ type: "UPDATE_REQUEST" });
      await axios.put(
        `/api/photos/${imageID}`,
        { path: newImagePath, category: imageCategory },
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: "UPDATE_SUCCESS" });
      toast.success("Image updated successfully.", { position: "top-center" });
      setOpenEditModal(false);
      setNewImagePath("");
    } catch (error) {
      toast.error(getError(error), { position: "top-center" });
      dispatch({ type: "UPDATE_FAILED", payload: getError(error) });
    }
  };

  const deleteHandler = async (image) => {
    try {
      dispatch({ type: "DELETE_REQUEST" });
      await axios.delete(`/api/photos/${image._id}`, {
        headers: { authorization: `Bearer ${userInfo.token}` },
      });
      toast.success("Image deleted successfully.", { position: "top-center" });
      dispatch({ type: "DELETE_SUCCESS" });
      setOpenDeleteModal(0);
    } catch (error) {
      toast.error(getError(error), { position: "top-center" });
      dispatch({
        type: "DELETE_FAIL",
      });
    }
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
        clientAllowedFormats: ["image"],
        sources: ["local", "url", "camera", "google_drive"],
      },
      function (error, result) {
        if (result.event === "success") {
          setNewImagePath(result.info.secure_url);
          console.log(newImagePath);
        }
        if (error) {
          toast.error(getError(error), { position: "top-center" });
        }
      }
    );
  }, [newImagePath]);

  return (
    <>
      <div className="fs-3 font-medium text-center my-4 text-2xl">Photos</div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="overflow-x-auto lg:max-w-4xl xl:max-w-6xl mx-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Image</Table.HeadCell>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {images.map((image, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>
                    <div className="max-w-[200px] max-h-[250px] overflow-hidden rounded-lg">
                      <img
                        src={image.path}
                        alt={image.category}
                        className="mx-auto w-full h-auto overflow-hidden"
                      />
                    </div>
                  </Table.Cell>
                  <Table.Cell>{image._id}</Table.Cell>
                  <Table.Cell>{image.category}</Table.Cell>
                  <Table.Cell>
                    <div className="flex flex-col justify-evenly gap-2 items-stretch">
                      <Button
                        color="failure"
                        onClick={() => {
                          setOpenDeleteModal(image._id);
                        }}
                        disabled={loadingDelete}
                      >
                        <FaTrashCan className="me-1" />
                        <div id="text">Delete</div>
                      </Button>

                      <Button
                        color="purple"
                        onClick={() => {
                          setNewImagePath(image.path);
                          setImageCategory(image.category);
                          setOpenEditModal(image._id);
                        }}
                      >
                        <FaTrashCan className="me-1" />
                        <div id="text">Edit</div>
                      </Button>
                    </div>

                    {/* ------------Delete Modal---------- */}
                    <Modal
                      show={openDeleteModal === image._id}
                      size="md"
                      onClose={() => setOpenDeleteModal(0)}
                      popup
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="text-center">
                          <PiTrashDuotone className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this Image?{" "}
                            <span className="text-sm">
                              <b>Image ID:</b> {image._id}
                            </span>
                          </h3>
                          <div className="flex justify-center gap-4">
                            <Button
                              color="failure"
                              onClick={() => {
                                deleteHandler(image);
                              }}
                            >
                              Yes, I'm sure
                            </Button>
                            <Button
                              color="gray"
                              onClick={() => setOpenDeleteModal(0)}
                            >
                              No, cancel
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>

                    {/* ------------Edit Modal---------- */}
                    <Modal
                      show={openEditModal === image._id}
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
                          <div className="flex items-center justify-center">
                            <div className="max-w-[200px] max-h-[250px] overflow-hidden rounded-lg">
                              <img
                                src={newImagePath ? newImagePath : image.path}
                                alt={
                                  imageCategory ? imageCategory : image.category
                                }
                                className="w-full h-auto overflow-hidden"
                              />
                            </div>
                          </div>
                          <form onSubmit={editHandler}>
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
                                  defaultValue={image.category}
                                  onChange={(e) => {
                                    setImageCategory(e.target.value);
                                  }}
                                >
                                  <option>Gadren</option>
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
                                onClick={(e) => {
                                  editHandler(e, image._id);
                                }}
                              >
                                Submit
                              </Button>
                            </div>
                          </form>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </>
  );
}
