import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button onClick={handleClose} primary>
      Accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is some content for the modal.</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
        consectetur quam, eget iaculis orci. Etiam ultrices, ex et rutrum
        semper, dolor est lobortis nibh, quis fringilla sapien felis ut dolor.
        Praesent sollicitudin libero dolor. Sed ac ante justo. Pellentesque eget
        hendrerit sapien. Maecenas posuere leo vel nisi pellentesque laoreet.
        Suspendisse sollicitudin sapien faucibus diam malesuada, eu ultricies mi
        dignissim. Integer quis consectetur nulla. Morbi ut est id odio
        vestibulum porttitor. Maecenas at eleifend ante. Phasellus tempor
        faucibus purus, a gravida orci suscipit sed. Nulla ullamcorper, lacus at
        dapibus rhoncus, dolor felis congue sem, nec vehicula turpis est sed
        libero. Fusce eu dui eget magna porttitor sodales vitae ut massa. Proin
        dignissim faucibus mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
        consectetur quam, eget iaculis orci. Etiam ultrices, ex et rutrum
        semper, dolor est lobortis nibh, quis fringilla sapien felis ut dolor.
        Praesent sollicitudin libero dolor. Sed ac ante justo. Pellentesque eget
        hendrerit sapien. Maecenas posuere leo vel nisi pellentesque laoreet.
        Suspendisse sollicitudin sapien faucibus diam malesuada, eu ultricies mi
        dignissim. Integer quis consectetur nulla. Morbi ut est id odio
        vestibulum porttitor. Maecenas at eleifend ante. Phasellus tempor
        faucibus purus, a gravida orci suscipit sed. Nulla ullamcorper, lacus at
        dapibus rhoncus, dolor felis congue sem, nec vehicula turpis est sed
        libero. Fusce eu dui eget magna porttitor sodales vitae ut massa. Proin
        dignissim faucibus mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
        consectetur quam, eget iaculis orci. Etiam ultrices, ex et rutrum
        semper, dolor est lobortis nibh, quis fringilla sapien felis ut dolor.
        Praesent sollicitudin libero dolor. Sed ac ante justo. Pellentesque eget
        hendrerit sapien. Maecenas posuere leo vel nisi pellentesque laoreet.
        Suspendisse sollicitudin sapien faucibus diam malesuada, eu ultricies mi
        dignissim. Integer quis consectetur nulla. Morbi ut est id odio
        vestibulum porttitor. Maecenas at eleifend ante. Phasellus tempor
        faucibus purus, a gravida orci suscipit sed. Nulla ullamcorper, lacus at
        dapibus rhoncus, dolor felis congue sem, nec vehicula turpis est sed
        libero. Fusce eu dui eget magna porttitor sodales vitae ut massa. Proin
        dignissim faucibus mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
        consectetur quam, eget iaculis orci. Etiam ultrices, ex et rutrum
        semper, dolor est lobortis nibh, quis fringilla sapien felis ut dolor.
        Praesent sollicitudin libero dolor. Sed ac ante justo. Pellentesque eget
        hendrerit sapien. Maecenas posuere leo vel nisi pellentesque laoreet.
        Suspendisse sollicitudin sapien faucibus diam malesuada, eu ultricies mi
        dignissim. Integer quis consectetur nulla. Morbi ut est id odio
        vestibulum porttitor. Maecenas at eleifend ante. Phasellus tempor
        faucibus purus, a gravida orci suscipit sed. Nulla ullamcorper, lacus at
        dapibus rhoncus, dolor felis congue sem, nec vehicula turpis est sed
        libero. Fusce eu dui eget magna porttitor sodales vitae ut massa. Proin
        dignissim faucibus mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
        consectetur quam, eget iaculis orci. Etiam ultrices, ex et rutrum
        semper, dolor est lobortis nibh, quis fringilla sapien felis ut dolor.
        Praesent sollicitudin libero dolor. Sed ac ante justo. Pellentesque eget
        hendrerit sapien. Maecenas posuere leo vel nisi pellentesque laoreet.
        Suspendisse sollicitudin sapien faucibus diam malesuada, eu ultricies mi
        dignissim. Integer quis consectetur nulla. Morbi ut est id odio
        vestibulum porttitor. Maecenas at eleifend ante. Phasellus tempor
        faucibus purus, a gravida orci suscipit sed. Nulla ullamcorper, lacus at
        dapibus rhoncus, dolor felis congue sem, nec vehicula turpis est sed
        libero. Fusce eu dui eget magna porttitor sodales vitae ut massa. Proin
        dignissim faucibus mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
        consectetur quam, eget iaculis orci. Etiam ultrices, ex et rutrum
        semper, dolor est lobortis nibh, quis fringilla sapien felis ut dolor.
        Praesent sollicitudin libero dolor. Sed ac ante justo. Pellentesque eget
        hendrerit sapien. Maecenas posuere leo vel nisi pellentesque laoreet.
        Suspendisse sollicitudin sapien faucibus diam malesuada, eu ultricies mi
        dignissim. Integer quis consectetur nulla. Morbi ut est id odio
        vestibulum porttitor. Maecenas at eleifend ante. Phasellus tempor
        faucibus purus, a gravida orci suscipit sed. Nulla ullamcorper, lacus at
        dapibus rhoncus, dolor felis congue sem, nec vehicula turpis est sed
        libero. Fusce eu dui eget magna porttitor sodales vitae ut massa. Proin
        dignissim faucibus mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
        consectetur quam, eget iaculis orci. Etiam ultrices, ex et rutrum
        semper, dolor est lobortis nibh, quis fringilla sapien felis ut dolor.
        Praesent sollicitudin libero dolor. Sed ac ante justo. Pellentesque eget
        hendrerit sapien. Maecenas posuere leo vel nisi pellentesque laoreet.
        Suspendisse sollicitudin sapien faucibus diam malesuada, eu ultricies mi
        dignissim. Integer quis consectetur nulla. Morbi ut est id odio
        vestibulum porttitor. Maecenas at eleifend ante. Phasellus tempor
        faucibus purus, a gravida orci suscipit sed. Nulla ullamcorper, lacus at
        dapibus rhoncus, dolor felis congue sem, nec vehicula turpis est sed
        libero. Fusce eu dui eget magna porttitor sodales vitae ut massa. Proin
        dignissim faucibus mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
        consectetur quam, eget iaculis orci. Etiam ultrices, ex et rutrum
        semper, dolor est lobortis nibh, quis fringilla sapien felis ut dolor.
        Praesent sollicitudin libero dolor. Sed ac ante justo. Pellentesque eget
        hendrerit sapien. Maecenas posuere leo vel nisi pellentesque laoreet.
        Suspendisse sollicitudin sapien faucibus diam malesuada, eu ultricies mi
        dignissim. Integer quis consectetur nulla. Morbi ut est id odio
        vestibulum porttitor. Maecenas at eleifend ante. Phasellus tempor
        faucibus purus, a gravida orci suscipit sed. Nulla ullamcorper, lacus at
        dapibus rhoncus, dolor felis congue sem, nec vehicula turpis est sed
        libero. Fusce eu dui eget magna porttitor sodales vitae ut massa. Proin
        dignissim faucibus mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
        consectetur quam, eget iaculis orci. Etiam ultrices, ex et rutrum
        semper, dolor est lobortis nibh, quis fringilla sapien felis ut dolor.
        Praesent sollicitudin libero dolor. Sed ac ante justo. Pellentesque eget
        hendrerit sapien. Maecenas posuere leo vel nisi pellentesque laoreet.
        Suspendisse sollicitudin sapien faucibus diam malesuada, eu ultricies mi
        dignissim. Integer quis consectetur nulla. Morbi ut est id odio
        vestibulum porttitor. Maecenas at eleifend ante. Phasellus tempor
        faucibus purus, a gravida orci suscipit sed. Nulla ullamcorper, lacus at
        dapibus rhoncus, dolor felis congue sem, nec vehicula turpis est sed
        libero. Fusce eu dui eget magna porttitor sodales vitae ut massa. Proin
        dignissim faucibus mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
        consectetur quam, eget iaculis orci. Etiam ultrices, ex et rutrum
        semper, dolor est lobortis nibh, quis fringilla sapien felis ut dolor.
        Praesent sollicitudin libero dolor. Sed ac ante justo. Pellentesque eget
        hendrerit sapien. Maecenas posuere leo vel nisi pellentesque laoreet.
        Suspendisse sollicitudin sapien faucibus diam malesuada, eu ultricies mi
        dignissim. Integer quis consectetur nulla. Morbi ut est id odio
        vestibulum porttitor. Maecenas at eleifend ante. Phasellus tempor
        faucibus purus, a gravida orci suscipit sed. Nulla ullamcorper, lacus at
        dapibus rhoncus, dolor felis congue sem, nec vehicula turpis est sed
        libero. Fusce eu dui eget magna porttitor sodales vitae ut massa. Proin
        dignissim faucibus mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
        consectetur quam, eget iaculis orci. Etiam ultrices, ex et rutrum
        semper, dolor est lobortis nibh, quis fringilla sapien felis ut dolor.
        Praesent sollicitudin libero dolor. Sed ac ante justo. Pellentesque eget
        hendrerit sapien. Maecenas posuere leo vel nisi pellentesque laoreet.
        Suspendisse sollicitudin sapien faucibus diam malesuada, eu ultricies mi
        dignissim. Integer quis consectetur nulla. Morbi ut est id odio
        vestibulum porttitor. Maecenas at eleifend ante. Phasellus tempor
        faucibus purus, a gravida orci suscipit sed. Nulla ullamcorper, lacus at
        dapibus rhoncus, dolor felis congue sem, nec vehicula turpis est sed
        libero. Fusce eu dui eget magna porttitor sodales vitae ut massa. Proin
        dignissim faucibus mauris.
      </p>
    </div>
  );
}

export default ModalPage;
