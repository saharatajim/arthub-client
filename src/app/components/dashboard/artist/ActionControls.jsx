"use client";
import { FaEdit, FaTrash } from "react-icons/fa";
import {Button, Modal} from "@heroui/react";
import EditArtworkPage from "./EditArtworkPage";
import { deleteArt } from "@/utilies/action";
export default function ActionControls({art}) {
  const artId=art._id
const handleDelete = async () => {
  try {
    await deleteArt(artId);
    alert("Deleted successfully");
    window.location.reload(); // 🔄 reloads the page
  } catch (err) {
    console.error("Error deleting artwork:", err);
    alert("Failed to delete");
  }
};

  return (
    <div className="flex gap-4 mt-2">
     <Modal>
      <Button className="bg-white text-blue-600 hover:text-blue-800"><FaTrash /> Edit</Button>
      <Modal.Backdrop>
        <Modal.Container>
            <Modal.Dialog className="">
           <Modal.CloseTrigger />
         <EditArtworkPage art={art}/></Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
      <div
        
        className="flex items-center gap-1 text-red-600 hover:text-red-800"
      >
        

         <Modal>
      <Button className="bg-white text-red-600 hover:text-red-800"><FaTrash /> Delete</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
            
              <Modal.Heading>Are sure to Delete?</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
               This is a warning,if you once delete you can not get this data again
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button className="w-full" onClick={handleDelete}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
      </div>
    </div>
  );
}
