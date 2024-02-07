import { useState } from "react"
import { farbDekoreData } from "./MusterData"
import MusterCheckoutModel from "../modals/MusterCheckoutModel"
import {
  addToMusterBasket,
  removeFromMusterBasket,
} from "../../store/features/cart/cartSlice"
import { useDispatch } from "react-redux"

const FarbDekoreMuster = () => {
  const dispatch = useDispatch()
  const [FarbDekoreactiveSlide, setFarbDekoreactiveSlide] = useState(0)
  const [seltectedFarbDekore, setSelectedFarbDekore] = useState({})

  const [selectedfarbDekoreItem, setSelectedfarbDekoreItem] = useState(
    farbDekoreData.length > 0 ? farbDekoreData[0].id : null
  )
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = (id) => {
    console.log("Clicked")
    const checkbox = document.getElementById(`link-checkbox-${id}`) // Adjust the ID to be unique
    if (seltectedFarbDekore) {
      handleselectedFarbDekore(id)
    }
    if (checkbox.checked) {
      const newMusteritem = farbDekoreData.find((item) => item.id === id)
      dispatch(addToMusterBasket(newMusteritem))

      setModalOpen(true)
    } else {
      dispatch(removeFromMusterBasket({ id: id }))
    }
  }
  const closeModal = () => {
    console.log("clicked")
    console.log("value close", isModalOpen)
    setModalOpen(false)
  }

  const handleFarbDekoreSlideButtonClick = (index) => {
    setFarbDekoreactiveSlide(index)
  }
  const handleselectedFarbDekore = (id) => {
    const selectFarbDekore = farbDekoreData.find((item) => item.id === id)
    setSelectedfarbDekoreItem(id)
    setSelectedFarbDekore(selectFarbDekore)
  }

  return (
    <>
      {" "}
      <div className="mt-16">
        <div className="">
          <p className="text-xl text-gray-800 font-bold ml-8">Farb-Dekore</p>
        </div>
        <div className="grid  md:grid-cols-12 pt-1 pl-5 pr-5 pb-5">
          <div className="w-full md:col-span-5  p-3">
            <div className="p-3  bg-white border border-gray rounded-2xl custom-shadow">
              <div
                id="indicators-carousel"
                className="relative w-full "
                data-carousel="static"
              >
                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                  {/* Item 1 */}
                  <div
                    className={`duration-700 ease-in-out ${
                      FarbDekoreactiveSlide === 0 ? "block" : "hidden"
                    }`}
                    data-carousel-item="active"
                  >
                    <img
                      src={
                        seltectedFarbDekore.image || farbDekoreData[0]?.image
                      }
                      className="hover:scale-125 transition-all duration-500 cursor-pointer absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt="missing"
                    />
                  </div>
                  {/* Item 2 */}
                  <div
                    className={`duration-700 ease-in-out ${
                      FarbDekoreactiveSlide === 1 ? "block" : "hidden"
                    }`}
                    data-carousel-item
                  >
                    <img
                      src={
                        seltectedFarbDekore.image2 || farbDekoreData[0]?.image2
                      }
                      className="hover:scale-125 transition-all duration-500 cursor-pointer absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt="missing"
                    />
                  </div>
                </div>
                {/* Slider indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                  <button
                    type="button"
                    className={`w-3 h-3 rounded-full bg-black ${
                      FarbDekoreactiveSlide === 0 ? "opacity-100" : "opacity-50"
                    }`}
                    aria-current="true"
                    aria-label="Slide 1"
                    onClick={() => handleFarbDekoreSlideButtonClick(0)}
                  />
                  <button
                    type="button"
                    className={`w-3 h-3 rounded-full bg-black ${
                      FarbDekoreactiveSlide === 1 ? "opacity-100" : "opacity-50"
                    }`}
                    aria-current="true"
                    aria-label="Slide 2"
                    onClick={() => handleFarbDekoreSlideButtonClick(1)}
                  />
                </div>
              </div>
              <div className="p-5">
                <p className="text-center font-bold text-xl">
                  {seltectedFarbDekore.name || farbDekoreData[0]?.name}
                </p>
                <div className="p-4 flex justify-between">
                  <div className="text-center">
                    <img
                      src="/images/muster/2.webp"
                      alt="missing"
                      className="w-1/3 h-auto ml-10"
                    />
                    <p className="mt-2 text-sm">Dezente Struktur</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="/images/muster/3.webp"
                      alt="missing"
                      className="w-1/3 h-auto ml-10"
                    />
                    <p className="mt-2 text-sm">Matt Effekt</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="/images/muster/1.webp"
                      alt="missing"
                      className="w-1/3 h-auto ml-10"
                    />
                    <p className="mt-2 text-sm">Langlebiges Dekor</p>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="w-1/2 focus:outline-none text-white bg-[#547C5A] hover:bg-[#547C5A] focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    <span className="text-lg font-bold"> Muster Bestellen</span>
                  </button>
                </div>
                <div className="text-center flex justify-center items-center mt-10 mb-14">
                  <img
                    src="/images/muster/arrow.webp"
                    alt=""
                    className="w-1/12 h-auto mx-1"
                    onClick={() => handleFarbDekoreSlideButtonClick(0)}
                  />

                  <img
                    src="/images/muster/right-arrow.webp"
                    alt=""
                    className="w-1/12 h-auto mx-1"
                    onClick={() => handleFarbDekoreSlideButtonClick(1)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:col-span-7 ml-5">
            <div className="p-4">
              <div className="grid md:grid-cols-12 gap-4">
                {farbDekoreData.map((item) => (
                  <div key={item.id} className="w-full col-span-3">
                    <div className="mb-2 text-center">
                      <div className="relative">
                        <img
                          className={`w-full rounded-xl ${
                            selectedfarbDekoreItem === item.id
                              ? "border-black border-2"
                              : ""
                          }`}
                          src={item.image}
                          alt="dummy-image"
                          onClick={() => {
                            handleselectedFarbDekore(item.id)
                          }}
                        />
                        <div className="absolute bottom-0 right-0 text-white p-2 rounded ">
                          <input
                            id={`link-checkbox-${item.id}`}
                            type="checkbox"
                            defaultValue
                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                            onClick={() => {
                              openModal(item.id)
                            }}
                          />
                        </div>
                      </div>
                      <p className="mt-2 text-sm">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MusterCheckoutModel show={isModalOpen} close={closeModal} />
    </>
  )
}

export default FarbDekoreMuster
