import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { DeleteUser } from '../../../store/reducers/userSlice';
interface CreateDataType {
  open?: any;
  toggleModal: boolean;
  dataId?: number;
}

const DeleteData = ({ open, toggleModal, dataId }: CreateDataType) => {
  const dispatch = useDispatch();

  const deleteItem = (dataId: number): void => {
    dispatch(DeleteUser(dataId));
    open();
  };
  return (
    <Modal
      title="Are you sure delete this task?"
      centered
      visible={toggleModal}
      onOk={() => deleteItem(dataId as number)}
      onCancel={open}
      okType="danger"
    >
      <p>Are You Sure :D</p>
    </Modal>
  );
};

export default DeleteData;
