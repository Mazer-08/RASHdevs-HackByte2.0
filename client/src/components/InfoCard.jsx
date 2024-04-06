import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

const InfoCard = ({item}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className='my-4'>
        <div className='border border-slate-900 p-2 w-full m-0 rounded-xl flex'>
            <div className='flex w-1/2 justify-start'>
                <div className='border rounded-lg overflow-hidden'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuL7Vobuh7dj-OLkGIdOKWJHz8rHY7l64gUOzGNr3dUA&s"  className="h-[4rem] "alt="" />
                </div>
                <div className='mx-4'>
                    <h1 className='text-xl font-semibold text-slate-800'>
                        {item.company}
                    </h1>
                    <p className='text-sm text-slate-500'>
                        date, time
                    </p>
                </div>
            </div>
            <div className='flex w-1/2 items-center justify-around'>
                <div className='text-lg font-semibold text-slate-800'>{item.role}</div>
                <div className='flex items-center justify-center bg-violet-400 rounded-full h-[2.5rem] w-[2.5rem]'>
                    <div className='text-white text-center'>{item.count}</div>
                </div>
                <div onClick={onOpen} className='p-2 text-sm bg-violet-600 px-4 rounded-xl text-white hover:text-violet-600 hover:bg-white'>
                    Apply
                </div>
            </div>
            
        </div>


        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam rerum tempora culpa in dicta et omnis amet sit provident corrupti nulla, cumque a aliquam magni odit dolorum aliquid quibusdam!
            Suscipit quisquam, impedit, cupiditate ipsam fuga sit facilis tempore nisi repellat iure, repellendus voluptatibus nam vero quas labore officiis dignissimos debitis! Adipisci, harum optio placeat velit dolorum molestiae neque blanditiis!
            Hic cupiditate qui quos doloremque voluptatem corporis incidunt excepturi fugiat, voluptas quae facere sapiente eaque, laboriosam nemo eveniet suscipit. Dicta est perspiciatis debitis sint sunt vel aspernatur nobis adipisci illum.
            Tenetur fugiat esse optio ea nobis aspernatur quis iste iure voluptate, voluptatem natus sapiente illum itaque obcaecati consequuntur aut alias voluptates reprehenderit animi officiis ullam rerum? Unde excepturi recusandae saepe!
            Beatae odio totam nesciunt, hic quo accusantium sapiente obcaecati quas ut. Nulla omnis fugiat, tempore illum suscipit laboriosam cumque at quidem modi optio repudiandae rem consequatur temporibus, laudantium dolorem dolorum.
            Eligendi, voluptates dicta! Asperiores, illum beatae alias exercitationem corrupti temporibus eius minima voluptatem quos! Incidunt officia, neque unde, ipsa esse, optio iusto nisi molestias debitis veniam ratione atque saepe impedit?
            Velit optio commodi adipisci laborum nostrum quidem, at eius esse quaerat accusantium iure molestias reprehenderit magni perferendis cum minus vero unde provident eos qui ratione laboriosam. Aperiam odio consequatur eaque.
            Esse culpa aut est maxime repellat temporibus nam, tempore porro, illo reiciendis eveniet quibusdam ipsum, quis pariatur aperiam exercitationem amet sunt nesciunt itaque magni eos consequatur natus! Amet, dignissimos ad.
            Nihil, maiores architecto incidunt suscipit temporibus ratione modi obcaecati dolor, tempore iusto voluptatibus id praesentium quo alias dolore neque consectetur eum, quisquam possimus! Alias eligendi numquam voluptatem, a labore nobis.
            Impedit esse voluptatum at illo perspiciatis, corrupti minima porro dolorum saepe corporis ab ducimus similique quidem natus quisquam quas atque sint eaque nemo veritatis officiis excepturi id ut animi? Deleniti!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default InfoCard