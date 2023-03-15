import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function WriteReviewModal({reviewsList, setReviewsList}) {
    const [pressedWriteReview, setPressedWriteReview] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);

    function handleWriteReview() {
        setPressedWriteReview(!pressedWriteReview);
    }

  function handleClose() {
    setPressedWriteReview(false); 
    setSelectedTags([])
  };
  
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const rating = formData.get("rating");
    const roomType = formData.get("roomType");
    const apartmentType = formData.get("apartmentType");
    const review = formData.get("review");

    // Create a new JSON object with the form data
    const newReview = {
      username: name,
      rating: rating,
      roomType: roomType,
      apartmentType: apartmentType,
      reviewText: review,
      qualities: selectedTags
    };

    setReviewsList([...reviewsList, newReview]);
  }

  function handleTagClick(tag) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  const tags = [
    "Close To Campus",
    "Cheap",
    "Good Management",
    "Furnished",
    "Close to Campus",
    "Expensive",
    "Old",
    "Good Transportation",
    "Close to Unitrans",
    "Quiet",
    "Loud",
    "Far from Campus",
    "Good Dining Options",
    "Fast Wifi"
  ];

  return (
    <>
    <Button onClick={handleWriteReview} variant="primary">Write a review</Button>


      <Modal show={pressedWriteReview} onHide={handleWriteReview}>
        <Modal.Header closeButton>
          <Modal.Title>Write your review</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
        <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                name="name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Select name="rating" defaultValue="Choose...">
                  <option disabled>Choose...</option>
                  <option value="1.0">1.0</option>
                  <option value="2.0">2.0</option>
                  <option value="3.0">3.0</option>
                  <option value="4.0">4.0</option>
                  <option value="5.0">5.0</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Room Type</Form.Label>
              <Form.Select name="roomType" defaultValue="Choose...">
                <option disabled>Choose...</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Triple">Triple</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Apartment Type</Form.Label>
              <Form.Select name="apartmentType" defaultValue="Choose...">
                <option disabled>Choose...</option>
                <option value="Studio">Studio</option>
                <option value="2 bed 1 bath">2 bed, 1 bath</option>
                <option value="4 bed 2 bath">4 bed, 2 bath</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Review</Form.Label>
              <Form.Control as="textarea" rows={3} name="review"/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tags</Form.Label>
              <br />
              {tags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "primary" : "outline-primary"}
                  onClick={() => handleTagClick(tag)}
                  className="me-2 mb-2"
                >
                  {tag}
                </Button>
              ))}
            </Form.Group>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default WriteReviewModal;
