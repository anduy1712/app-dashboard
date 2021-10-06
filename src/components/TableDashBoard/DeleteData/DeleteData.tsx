import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { DeleteUser } from '../../../store/reducers/userSlice';
interface CreateDataType {
  visible: boolean;
  onClose: () => void;
  dataId: number | null;
}

const DeleteData = ({ onClose, visible, dataId }: CreateDataType) => {
  const dispatch = useDispatch();

  const deleteItem = (dataId: number): void => {
    dispatch(DeleteUser(dataId));
    onClose();
  };
  return (
    <Modal
      title="Are you sure delete this task?"
      centered
      visible={visible}
      onOk={() => deleteItem(dataId as number)}
      onCancel={onClose}
      okType="danger"
    >
      <p>Are You Sure :D</p>
    </Modal>
  );
};

export default DeleteData;
