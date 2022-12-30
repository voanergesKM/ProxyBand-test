import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import FadeLoader from 'react-spinners/FadeLoader';
import PropTypes from 'prop-types';
import { AlbumDescription, AlbumItem, Backdrop, CloseBtn, StyledModal } from './AlbumsModl.styled';
import { fetchUserAlbums } from '../../redux/userAlbums/albumsOperations';
import { ErrorMesage } from '../ErrorMessage/ErrorMesage';

const modalRoot = document.querySelector('#modal-root');

const spinnerStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const AlbumModal = ({ onToggle, id }) => {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums.items);
  const isLoading = useSelector(state => state.albums.isLoading);
  const error = useSelector(state => state.albums.error);

  useEffect(() => {
    dispatch(fetchUserAlbums(id));
  }, [dispatch, id]);

  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);
    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  });

  const handleEscPress = evt => {
    if (evt.code === 'Escape') {
      onToggle();
    }
  };

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onToggle();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <StyledModal>
        <FadeLoader
          loading={isLoading}
          cssOverride={spinnerStyle}
          color="#FF6347"
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        {!isLoading && !error && albums && (
          <ul>
            {albums.map(item => (
              <AlbumItem key={item.id}>
                <AlbumDescription>{item.title}</AlbumDescription>
              </AlbumItem>
            ))}
          </ul>
        )}

        {error && !isLoading && <ErrorMesage />}

        <CloseBtn onClick={() => onToggle()}>
          <AiOutlineCloseCircle size={30} />
        </CloseBtn>
      </StyledModal>
    </Backdrop>,
    modalRoot
  );
};

AlbumModal.propTypes = {
  onToggle: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
