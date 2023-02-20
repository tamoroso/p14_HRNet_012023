import { Modal } from '@tamoroso_oc/react_modal_oc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClose } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction } from 'react';
import { FormikState } from 'formik';
import dayjs from 'dayjs';
import styles from './ConfirmationModal.module.css';

interface ConfirmationModalProps {
   show: boolean;
   setShow: Dispatch<SetStateAction<boolean>>;
   resetForm: (
      nextState?:
         | Partial<
              FormikState<{
                 lastname: string;
                 firstname: string;
                 birthDate: dayjs.Dayjs;
                 startDate: dayjs.Dayjs;
                 street: string;
                 city: string;
                 state: string;
                 zipcode: string;
                 companyDept: string;
              }>
           >
         | undefined
   ) => void;
}

function ConfirmationModal({
   show,
   setShow,
   resetForm,
}: ConfirmationModalProps) {
   const handleCloseModal = () => {
      setShow(false);
      resetForm();
   };
   return (
      <Modal show={show} style={{ padding: '1rem' }}>
         <div className={styles.modal_header}>
            <button type='button' onClick={handleCloseModal}>
               <FontAwesomeIcon icon={faClose} />
            </button>
         </div>
         <div className={styles.modal_content}>
            <FontAwesomeIcon icon={faCheckCircle} size='2xl' color='green' />
            <h2>Employee created !</h2>
         </div>
      </Modal>
   );
}

export default ConfirmationModal;
