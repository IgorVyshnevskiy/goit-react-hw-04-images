import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './SearchBar/SearchBar';
import Title from './Title';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';


const BASE_URL = 'https://pixabay.com/api/?';
const KEY = '38894004-6d48aacf53b986fdbdf72bda8';
class App extends Component {
  state = {
    image: '',
    showModal: false,
    images: [],
    page: 1,
    status: 'idle',
    totalImages: 0,
    largeImageUrl: '',
    tag: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, image } = this.state;

    if (prevState.image !== image || page !== prevState.page) {
      try {
        this.setState({
          status: 'pending',
          error: null,
          images: [],
        });
        const res = await fetch(
          BASE_URL +
            `image_type=photo&orientation=horizontal&q=${image}&page=${page}&per_page=12&key=` +
            KEY
        );

        const data = await res.json();
        const images = data.hits.map(
          ({ id, tags, webformatURL, largeImageURL }) => ({
            id,
            tags,
            webformatURL,
            largeImageURL,
          })
        );

        const totalImages = data.totalHits;

        if (images.length === 0) {
          this.setState({ status: 'rejected' });
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            totalImages,
            status: 'resolved',
          }));
        }
      } catch (error) {
        console.log('error');
      }
    }
  }

  hendelFormSubmit = image => {
    this.setState({ image, page: 1, images: [] });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handleImgOpenClick = (largeImageUrl, tag) => {
    this.setState({ largeImageUrl, tag });
    this.toggleModal();
  };

  LoadMoreButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const {
      image,
      showModal,
      images,
      largeImageUrl,
      tag,
      status,
      page,
      totalImages,
    } = this.state;
    const countPages = Math.ceil(totalImages / 12);

    return (
      <>
        <Searchbar onFormSubmit={this.hendelFormSubmit} />
        {status === 'idle' && <Title />}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <ErrorMessage images={image} />}
        {status === 'resolved' && (
          <ImageGallery
            images={images}
            onToggleModal={this.toggleModal}
            showModal={showModal}
            handleImgOpenClick={this.handleImgOpenClick}
          />
        )}
        {status === 'resolved' && page < countPages && (
          <Button onLoadMoreButtonClick={this.LoadMoreButtonClick} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageUrl} alt={tag} width="800" />
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
export default App;