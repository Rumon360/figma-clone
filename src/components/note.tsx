const Note = ({
  setShowNote,
}: {
  setShowNote: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      id="note"
      className="fixed box-shadow-custom bg-white border-2 items-start transition-[transform,opacity] ease-in-out border-gray-900 text-gray-600 flex flex-col gap-x-5 justify-between text-[1.2rem] md:text-[1.6rem] lg:text-[1.8rem] space-y-3 py-8 px-6 rounded-[0.8rem] bottom-[3.2rem] right-[3.2rem] w-[80%] md:w-[50%] lg:w-[30%] h-auto "
    >
      <p>
        <span className="font-semibold text-gray-900">Note:</span> I am not
        affiliated with Figma in any way. All images, the name of Linear and
        their logo are copyrighted by Figma. This website is only intended for
        practice purposes and as a homage to Figma's great UI work.
      </p>
      <button
        onClick={() => {
          const el = document.getElementById("note");
          if (el) {
            el.style.transform = "translateY(-100px)";
            el.style.opacity = "0";
          }
          setTimeout(() => {
            setShowNote(false);
          }, 5000);
        }}
        className="block rounded-[1rem] pt-[1.2rem] pb-[1.4rem] px-[2.4rem] font-[700] leading-[1] border-none cursor-pointer text-center bg-black relative transition-all ease-in duration-[200ms] hover:translate-y-[-0.2rem] text-white text-[1.2rem] md:text-[1.6rem] lg:text-[1.8rem]"
      >
        Close
      </button>
    </div>
  );
};

export default Note;
