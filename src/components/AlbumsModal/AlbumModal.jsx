import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import FadeLoader from 'react-spinners/FadeLoader';
import { AlbumDescription, AlbumItem, Backdrop, CloseBtn, StyledModal } from './AlbumsModl.styled';
import { fetchUserAlbums } from '../../redux/userAlbums/albumsOperations';

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
        {!isLoading && albums && (
          <ul>
            {albums.map(item => (
              <AlbumItem key={item.id}>
                <AlbumDescription>{item.title}</AlbumDescription>
              </AlbumItem>
            ))}
          </ul>
        )}

        <CloseBtn onClick={() => onToggle()}>
          <AiOutlineCloseCircle size={30} />
        </CloseBtn>
      </StyledModal>
    </Backdrop>,
    modalRoot
  );
};
