import { useSelector } from 'react-redux';
import BgImg from '../../assets/bg.png'
import { IoCameraOutline } from "react-icons/io5";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../../firebase'
import { useEffect, useRef, useState } from 'react';

function PictureProfileCard() {
  const { currentUser } = useSelector((state) => state.subSubUser);
  const user = currentUser?.data

  const [ image, setImage ] =  useState(undefined)
  const [ imageUploadProgress, setImageUploadProgress ] = useState(0)
  const [ imageError, setImageError ] = useState(false)
  const [ imgUrl, setImgUrl ] = useState()

  const fileRef = useRef(null)
  useEffect(() => {
      if(image){
          handleFileUpload(image);
      }
  }, [image])

  const handleFileUpload = async (image) => {
      const storage = getStorage(app)
      const fileName = new Date().getTime() + image.name;
      const storageRef = ref(storage, fileName)
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
          'state_changed',
          (snapShot) => {
              const progress = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
              setImageUploadProgress(Math.round(progress));
          },
          (error) => {
              //console.log('ERROR', error)
              setImageError(true)   
          },
          () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => 
                setImgUrl( downloadURL)
              );
          }
      );
  };

  useEffect(() => {
    const fetchData = async () => {
      if (imgUrl) {
        try {
          const res = await '';

        } catch (error) {
          setImgUrl()
        } finally {
          setImgUrl()
        }
      }
    };
  
    fetchData(); 
  }, [imgUrl]); 
  


  return (
    <div className="card1 tablet:w-full">
        <div className="flex justify-center items-center flex-col gap-[16px]">
            <img src={user?.profile ? user?.profile : BgImg} alt={`image of ${user?.firstName}`} className="w-[100px] h-[100px]" />
            <div className="flex items-center gap-[8px] text-second-color">
                <IoCameraOutline className="w-[24px]" />
                <p className="text-[16px]">Upload Image</p>
            </div>
        </div>
    </div>
  )
}

export default PictureProfileCard