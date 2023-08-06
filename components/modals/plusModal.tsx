import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Modal from "../Modal";
import Input from "../Input";
import ImageUpload from "../ImageUpload";
import useplusModal from "@/hooks/useplusModal";

const plusModal = () => {
    const { data: currentUser } = useCurrentUser();
  const plusModal = useplusModal();




  const bodyContent = (
    <div className="flex flex-col gap-4">
  
    </div>
  )

    return(
        <Modal
       
        isOpen={plusModal.isOpen}
        title="Yaznbook Plus +"
        actionLabel="شراء يزنبوك بلس ب20.99 ريال"
        onClose={plusModal.onClose}
        body={bodyContent}
      />
    )
}

export default plusModal;