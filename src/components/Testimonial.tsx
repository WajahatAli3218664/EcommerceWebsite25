const Testimonials = () => {
  return (
    <div className="my-4 font-[sans-serif] max-w-6xl max-md:max-w-lg mx-auto">
      <div className="md:mb-28 mb-12 text-center">
        <h2 className="text-gray-800 text-3xl font-extrabold">What our happy clients say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative">
        <div className="bg-gradient-to-tr from-[#caf0f8] via-[#ade8f4] to-[#90e0ef] max-w-[65%] h-[145%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden"></div>

        <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
          <div>
            <img src="/emma.webp" className="w-10 h-10 rounded-full" alt="Emma Watson" />
            <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Emma Watson</h4>
            <p className="mt-0.5 text-xs text-gray-600">Actress and Activist</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-sm leading-relaxed">This site embodies the values of sustainability and quality I hold dear. The customer service was kind and responsive. I’m thrilled with my purchases and can’t wait to shop here again!</p>
          </div>
        </div>

        <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
          <div>
            <img src="/gates.webp" className="w-10 h-10 rounded-full" alt="Bill Gates" />
            <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Bill Gates</h4>
            <p className="mt-0.5 text-xs text-gray-600">Co-founder of Microsoft</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-sm leading-relaxed">The product selection is impressive, and the checkout process is efficient. My items arrived in perfect condition and quickly. This website sets a standard for excellence in online shopping!</p>
          </div>
        </div>

        <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
          <div>
            <img src="/musk.webp" className="w-10 h-10 rounded-full" alt="Elon Musk" />
            <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Elon Musk</h4>
            <p className="mt-0.5 text-xs text-gray-600">CEO of SpaceX and Tesla</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-sm leading-relaxed">The shopping experience here is revolutionary! The interface is as innovative as our technology. I received my order faster than I expected, and the quality is top-notch. A game changer in online shopping!</p>
          </div>
        </div>

        {/* Existing testimonials */}
        <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
          <div>
            <img src="/images/facebook.webp" className="w-10 h-10 rounded-full" alt="Mark Zuckerberg" />
            <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Mark Zuckerberg</h4>
            <p className="mt-0.5 text-xs text-gray-600">Co-founder of Facebook</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-sm leading-relaxed">The shopping experience was fantastic! The website is easy to navigate, and my order arrived quickly. The product quality exceeded my expectations. Highly recommended!</p>
          </div>
        </div>

        <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
          <div>
            <img src="/obama.webp" className="w-10 h-10 rounded-full" alt="Michelle Obama" />
            <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Michelle Obama</h4>
            <p className="mt-0.5 text-xs text-gray-600">Former First Lady of the United States</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-sm leading-relaxed">I found exactly what I was looking for at a great price. The customer service team was very helpful and responsive to my questions. I will definitely shop here again!</p>
          </div>
        </div>

        <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
          <div>
            <img src="/tom.webp" className="w-10 h-10 rounded-full" alt="Tom" />
            <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Tom Cruise</h4>
            <p className="mt-0.5 text-xs text-gray-600">American actor and producer</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-sm leading-relaxed">Excellent selection of products and seamless checkout process. I appreciated the fast shipping and the items were well-packaged. A trustworthy site for online shopping!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;