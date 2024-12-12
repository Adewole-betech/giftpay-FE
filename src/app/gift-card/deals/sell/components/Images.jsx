"use client";

import { Button, Carousel, Image, Upload } from "antd";
import { useEffect, useState } from "react";
import * as feather from "feather-icons/dist/feather";
import parse from "html-react-parser";
import { toast } from "react-toastify";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const CardImages = ({ setStep, sellDetails, setSellDetails }) => {
  const [images, setImages] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setImages(newFileList);

  const beforeUpload = (file) => {
    setImages([...fileList, file]);
    return false;
  };

  const onFinish = () => {
    if (images?.length > 0) {
      setSellDetails({ ...sellDetails, images: images });
      setStep(2);
    } else {
      toast.error("Upload at least 1 image");
    }
  };
  console.log(sellDetails);
  console.log(images);
  useEffect(() => {
    if (sellDetails?.images) {
      setImages(sellDetails?.images);
    }
  }, [sellDetails]);

  return (
    <>
      <p className="text-textBody text-sm lg:text-base">
        Buyers needs these details to find your item.
      </p>
      <Upload.Dragger
        action={null}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        accept="image/*"
        listType="picture-card"
        fileList={images}
        onPreview={handlePreview}
        maxCount={4}
        disabled={images.length >= 4}
      >
        <div className="w-full h-48 md:h-56 xl:h-64 rounded-xl bg-cover bg-no-repeat bg-center border-dashed flex flex-col items-center justify-center gap-2 lg:gap-3">
          <div className="bg-[#f2f3f6] rounded-full p-2 lg:p-2.5 w-fit flex items-center justify-center">
            {parse(feather.icons["image"].toSvg({ class: "size-12" }))}
          </div>
          <div className="flex flex-col gap-0.5 lg:gap-1">
            <p className="text-xs lg:text-sm text-primary font-medium">
              Drop an image to upload
            </p>
            <p className="text-textBody text-xs">Maximum size of 2MB</p>
          </div>
        </div>
      </Upload.Dragger>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
      <div className="flex items-center justify-end gap-2 lg:gap-3">
        <Button
          size="large"
          onClick={() => {
            images?.length > 0 &&
              setSellDetails({ ...sellDetails, images: images });
            setStep(0);
          }}
        >
          {parse(feather.icons["chevron-left"].toSvg({ class: "" }))} Back
        </Button>
        <Button type="primary" onClick={onFinish} size="large">
          Next {parse(feather.icons["chevron-right"].toSvg({ class: "" }))}
        </Button>
      </div>
      {/* <Carousel
        autoplay={false}
        draggable
        effect="fade"
        afterChange={(ind) => setIndex(ind)}
        dotsClass="slick-dots slick-thumb"
        appendDots={(dots) => (
          <div className="w-full">
            <ul className="w-full grid grid-cols-4 justify-center gap-3 relative -bottom-6">
              {dots}
            </ul>
          </div>
        )}
        customPaging={function (index) {
          const src = images[index]?.originFileObj;
          return (
            <a
              style={{
                backgroundImage: src && `url(${src})`,
                backgroundColor: !src && "#f2f3f6",
              }}
              className={`bg-cover bg-no-repeat bg-center w-full h-20 md:h-28 xl:h-32 rounded-md flex border-dashed`}
            >
              {!src && (
                <div className="w-full h-full opacity-0 hover:opacity-100 flex items-center justify-center">
                  {parse(feather.icons["plus"].toSvg({ class: "size-12" }))}
                </div>
              )}
            </a>
          );
        }}
      >
        
        <Upload.Dragger
          onChange={({ file, fileList }) => {
            console.log(file);
            console.log(fileList);
            let oldList = images;
            oldList[imgIdx] = file;
            setImages(oldList);
          }}
          accept="image/*"
        >
          <div className="w-full h-72 md:h-96 xl:h-[30rem] rounded-xl bg-cover bg-no-repeat bg-center border-dashed flex flex-col items-center justify-center gap-2 lg:gap-3">
            <div className="bg-[#f2f3f6] rounded-full p-2 lg:p-2.5 w-fit flex items-center justify-center">
              {parse(feather.icons["image"].toSvg({ class: "size-12" }))}
            </div>
            <div className="flex flex-col gap-0.5 lg:gap-1">
              <p className="text-xs lg:text-sm text-primary font-medium">
                Drop an image to upload
              </p>
              <p className="text-textBody text-xs">Maximum size of 2MB</p>
            </div>
          </div>
        </Upload.Dragger>
        <Upload.Dragger
          onChange={({ file, fileList }) => {
            console.log(file);
            console.log(fileList);
            let oldList = images;
            oldList[imgIdx] = file;
            setImages(oldList);
          }}
          accept="image/*"
        >
          <div className="w-full h-72 md:h-96 xl:h-[30rem] rounded-xl bg-cover bg-no-repeat bg-center border-dashed flex flex-col items-center justify-center gap-2 lg:gap-3">
            <div className="bg-[#f2f3f6] rounded-full p-2 lg:p-2.5 w-fit flex items-center justify-center">
              {parse(feather.icons["image"].toSvg({ class: "size-12" }))}
            </div>
            <div className="flex flex-col gap-0.5 lg:gap-1">
              <p className="text-xs lg:text-sm text-primary font-medium">
                Drop an image to upload
              </p>
              <p className="text-textBody text-xs">Maximum size of 2MB</p>
            </div>
          </div>
        </Upload.Dragger>
        <Upload.Dragger
          onChange={({ file, fileList }) => {
            console.log(file);
            console.log(fileList);
            let oldList = images;
            oldList[imgIdx] = file;
            setImages(oldList);
          }}
          accept="image/*"
        >
          <div className="w-full h-72 md:h-96 xl:h-[30rem] rounded-xl bg-cover bg-no-repeat bg-center border-dashed flex flex-col items-center justify-center gap-2 lg:gap-3">
            <div className="bg-[#f2f3f6] rounded-full p-2 lg:p-2.5 w-fit flex items-center justify-center">
              {parse(feather.icons["image"].toSvg({ class: "size-12" }))}
            </div>
            <div className="flex flex-col gap-0.5 lg:gap-1">
              <p className="text-xs lg:text-sm text-primary font-medium">
                Drop an image to upload
              </p>
              <p className="text-textBody text-xs">Maximum size of 2MB</p>
            </div>
          </div>
        </Upload.Dragger>
      </Carousel> */}
    </>
  );
};

export default CardImages;
