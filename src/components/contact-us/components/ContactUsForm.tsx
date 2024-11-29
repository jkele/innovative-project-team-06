export const ContactUsForm = () => {
  return (
    <form className="w-fit self-center mt-[80px] flex flex-col">
      <div className="flex flex-col w-full lg:w-[600px] gap-6 justify-center">
        <div className="flex flex-row gap-2">
          <label className="text-white uppercase text-base lg:text-[24px] self-center">
            Name:
          </label>
          <input
            type="text"
            className="bg-[#1e577a] ml-[36px] h-[40px] w-full text-white text-base lg:text-[24px] p-2 border-2 border-white"
          />
        </div>
        <div className="flex flex-row gap-2">
          <label className="text-white uppercase text-base lg:text-[24px] self-center">
            Email:
          </label>
          <input
            type="text"
            className="bg-[#1e577a] ml-[36px] h-[40px] w-full text-white text-base lg:text-[24px] p-2 border-2 border-white"
          />
        </div>
        <div className="flex flex-row gap-2">
          <label className="text-white uppercase text-base lg:text-[24px] self-center">
            Message:
          </label>
          <textarea className="bg-[#1e577a] h-[220px] w-full text-white text-base lg:text-[24px] p-2 border-2 border-white" />
        </div>
      </div>
      <button
        type="submit"
        className="text-[26px] uppercase text-white font-light items-center mt-10"
      >
        Submit
      </button>
    </form>
  );
};
