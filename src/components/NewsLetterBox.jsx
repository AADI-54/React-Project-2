
export const NewsLetterBox = () => {
    const onSubmitHandler = () => {
        event.preventDefault();
    }
  return (
    <div className="text-center">
        <p className="Text-2xl font-medium text-gray-800">Subscribe Now & Get 20% Off </p>
        <p className="text-gray-400 mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo error voluptates voluptate deserunt laudantium quod amet, perspiciatis possimus recusandae praesentium delectus repellat magnam provident nisi dolore, non explicabo ab repellendus?</p>
        <form onSubmit={onSubmitHandler} action="" className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 ">
            <input type="email" className="w-full sm:flex-1 outline-none " placeholder="Enter Your Email" required />
            <button type="submit" className="bg-black text-white text-xs px-10 py-4">Subscribe Now!!</button>
        </form>
    </div>
  )
}
