[].map((element, index, array) => {
  return newElement
})

const map = (callback, array) => {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    let newElement = callback(array[i], i, array)

    newArray.push(newElement)
  }

  return newArray
}

const discount = (percent: number) => (originalPrice: number) => percent * originalPrice

const withModal = (Component) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
      <Component
        isModalOpen={isOpen}
        openModal={}
        closeModal={}
      />
    </>
  )
}