const Note = ({
  setShowNote,
}: {
  setShowNote: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      id="note"
      className="fixed border-2 items-start transition-[transform,opacity] ease-in-out border-gray-900 text-gray-600 flex gap-x-5 justify-between text-[1.2rem] md:text-[1.6rem] lg:text-[1.8rem] py-8 px-6 rounded-[0.8rem] bottom-[3.2rem] right-[3.2rem] w-[80%] md:w-[50%] lg:w-[30%] h-auto backdrop-blur-lg"
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
        className="text-[1.6rem] lg:text-[2rem] cursor-pointer text-gray-600 transition-colors ease-in-out hover:text-gray-900"
      >
        X
      </button>
    </div>
  );
};

export default Note;
