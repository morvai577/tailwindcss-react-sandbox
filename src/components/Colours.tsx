type Props = {};
export const Colours = (props: Props) => {
  return (
    <>
      <div className="mt-12">
        {/* Text Colours */}
        <p className="text-black">Tailwind is awesome</p>
        <p className="text-red-500">Tailwind is awesome</p>
        <p className="text-green-500">Tailwind is awesome</p>
      </div>
      <div className="mt-12">
        {/* Background Colours */}
        <p className="bg-black text-white">Tailwind is awesome</p>
        <p className="bg-red-500 text-white">Tailwind is awesome</p>
        <p className="bg-green-500 text-white">Tailwind is awesome</p>
      </div>
      <div className="mt-12">
        {/* Text Underline */}
        <p className="underline decoration-black">Tailwind is awesome</p>
        <p className="underline decoration-pink-500">Tailwind is awesome</p>
      </div>
      <div className="mt-12">
        {/* Border Colors */}
        <input type="text" className="border border-blue-400" />
        <input type="text" className="border border-green-400" />
        <input type="text" className="border border-red-400" />
      </div>
      <div className="mt-12">
        {/* Divide Colors */}
        <div className="divide-y divide-blue-300">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
        </div>
      </div>
      <div className="mt-12">
        {/* Outline Colors */}
        <button className="outline outline-red-500">Hello</button>
      </div>
      <div className="mt-12">
        {/* Box Shadow Colors */}
        <button className="bg-cyan-500 shadow-lg shadow-purple-500/50">
          Subscribe
        </button>
      </div>
      <div className="mt-12">
        {/* Accent Colors */}
        <input type="checkbox" className="accent-purple-500" />
        <input type="checkbox" className="accent-cyan-500" />
      </div>
      <div className="mt-12">
        {/* Arbitrary Colors */}
        <div className="bg-[#427fab]">Hello</div>
        <div className="bg-[rgba(255, 0, 0)]">Hello</div>
        <div className="bg-[steelblue]">Hello</div>
      </div>
    </>
  );
};
