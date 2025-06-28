const LoadingProduct = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 mt-10 min-h-screen z-10">
      <div
        className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-green-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
      <p className="mt-4 text-lg text-gray-700">Memuat produk...</p>
    </div>
  );
}

export default LoadingProduct;
