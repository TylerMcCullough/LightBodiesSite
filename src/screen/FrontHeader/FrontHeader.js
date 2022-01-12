import React, { useState } from "react";
import "../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "react-toastify/dist/ReactToastify.css";
import { messages } from "../../mockup";

const FrontHeader = ({ userAddress, balances, connectWallet, getUserBalances }) => {

    const [images, setImages] = React.useState(0);
    const toastOptions = {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    };
  
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({
      message: "",
      challenge: "",
    });
  
    const onCloseModal = () => setOpen(false);
  
    const clickMercenary = async () => {
      console.log(messages.mercenary);
      let result = await canEnter("Mercenary");
      console.log(result);
      if (result) {
        setOpen(true);
        setMessage(messages.mercenary);
      }
    };
  
    const clickMonarch = async () => {
      let result = await canEnter("Monarch");
      console.log(result);
      if (result) {
        setOpen(true);
        setMessage(messages.monarch);
      }
    };
  
    const clickDiviner = async () => {
      let result = await canEnter("Deviner");
      console.log(result);
      if (result) {
        setOpen(true);
        setMessage(messages.diviner);
      }
    };
  
    const canEnter = async (faction) => {
      if (!window.ethereum) {
        toast.error(
          "You need to have metamask to connect with the site",
          toastOptions
        );
        return;
      }
      if (userAddress !== window.ethereum.selectedAddress) {
        await connectWallet();
        return;
      }
      if (!userAddress) {
        await connectWallet();
        return;
      }
      if (balances.nfts.length === 0) {
        await getUserBalances();
      }
      let entry = false;
      balances.nfts.map((item) => {
        if (item?.metadata?.type === faction) {
          entry = true;
        }
      });
      if (!entry) {
        toast.error(
          `You need a ${faction} to enter. Check the buy link to get access`,
          toastOptions
        );
      } else {
        toast.success(`Your ${faction} gives you access, Welcome!`, toastOptions);
      }
      return entry;
    };

    return (
        <div
            className={
                images === 0
                ? "light-header-main"
                : images === 1
                ? "light-header-main mercenary"
                : images === 2
                ? "light-header-main monarch"
                : "light-header-main diviner"
            }
        >
            <div className="light-header" id="light-header">
                <div
                    onClick={clickMercenary}
                    onMouseOver={() => setImages(1)}
                    onMouseOut={() => setImages(0)}
                    className="category-image"
                ></div>
                <div
                    onClick={clickMonarch}
                    onMouseOver={() => setImages(2)}
                    onMouseOut={() => setImages(0)}
                    className="category-image"
                ></div>
                <div
                    onClick={clickDiviner}
                    onMouseOver={() => setImages(3)}
                    onMouseOut={() => setImages(0)}
                    className="category-image"
                ></div>
            </div>

            <Modal
                open={open}
                onClose={onCloseModal}
                center
                classNames={{
                overlay: "customOverlay",
                modal: "customModal",
                }}
            >
                <p style={{ whiteSpace: "pre-line" }}>{message.message}</p>
                <h2 style={{ textAlign: "center" }}> Challenge</h2>
                <p style={{ whiteSpace: "pre-line" }}>{message.challenge}</p>
            </Modal>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default FrontHeader
