import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckIcon, ExclamationCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface Props {
  open : boolean,
  setOpen : Function,
  type : 'ERROR' | 'SUCCESS' | 'WARNING' | 'INFO',
  message : string,
  title : string,
  titleComfirm? : string,
  titileClose? : string,
  confirmAction? : Function
}

const ModalMessageComponent : React.FC <Props> = ({
  open,
  setOpen,
  type,
  message,
  title,
  titleComfirm,
  confirmAction = () => {},
  titileClose,
}) => {
  return (
    <Dialog open={open} onClose={() => setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="
              w-full
              sm:w-2/4
              xl:w-1/4
              xs:w-1/4
              2xl:w-1/4
              sm:my-8
              relative 
              transform 
              overflow-hidden 
              rounded-lg 
              bg-white 
              text-left 
              shadow-xl 
              transition-all
              data-[closed]:translate-y-4 
              data-[closed]:opacity-0 
              data-[enter]:duration-300 
              data-[leave]:duration-200 
              data-[enter]:ease-out 
              data-[leave]:ease-in 
              data-[closed]:sm:translate-y-0 
              data-[closed]:sm:scale-95
            "
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className={[
                    "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10",
                    type === 'ERROR' && 'bg-red-100',
                    type === 'WARNING' && 'bg-yellow-100',
                    type === 'SUCCESS' && 'bg-green-100',
                    type === 'INFO' && 'bg-blue-100',
                  ].join(' ')}>
                  { type === 'ERROR' && <ExclamationCircleIcon aria-hidden="true" className="h-6 w-6 text-red-600" /> }
                  { type === 'WARNING' && <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-yellow-600" /> }
                  { type === 'SUCCESS' && <CheckIcon aria-hidden="true" className="h-6 w-6 text-green-600" /> }
                  { type === 'INFO' && <InformationCircleIcon  aria-hidden="true" className="h-6 w-6 text-blue-600" /> }
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    {title ?? ''}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {message ?? ''}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              { titleComfirm && 
                <button
                  type="button"
                  onClick={() => confirmAction()}
                  className={[
                    type === 'SUCCESS' ? "bg-green-600 hover:bg-green-500" : "",
                    type === 'WARNING' ? "bg-yellow-600 hover:bg-yellow-500" : "",
                    type === 'ERROR' ? "bg-red-600 hover:bg-red-500" : "",
                    type === 'INFO' ? "bg-blue-600 hover:bg-blue-500" : "",
                    "inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto"
                  ].join(" ")}
                >
                  {titleComfirm ?? ''}
                </button>
              }
              {titileClose &&
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  {titileClose ?? ''}
                </button>
              }
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default ModalMessageComponent;