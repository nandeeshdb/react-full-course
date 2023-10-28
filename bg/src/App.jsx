import React, { useState, useEffect } from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

import { AiFillAudio, IconName } from "react-icons/ai";
import { Search } from '@mui/icons-material';


const NavLocation = () => {
  const [search, setSearch] = useState('');
  
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  
  const onLocationChange = (e) => {
    // Implement your location change logic here
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };

  



  

  return (
    <Container fluid className='mt-16 md:m-0 md:p-0'>
      <div className="mt-3 grid">
        <div className="m-3">
          <h1 className='text-2xl font-semibold'>Discover products and businesses:</h1>
        </div>

        <div className="mx-2 md:grid md:grid-cols-4 gap-2">
          <div className="w-full">
            <Form.Select defaultValue="default" className='rounded py-3 border-2 border-ezy-light-blue font-semibold text-center' onChange={onLocationChange}>
              <option value="default" disabled>Location</option>
              <option value="karnataka">Karnataka</option>
              <option value="tamilnadu">Tamil Nadu</option>
              <option value="maharashtra">Maharashtra</option>
            </Form.Select>
          </div>

          <div className='col-span-3'>
            <InputGroup>
              <Form.Control
                placeholder="Search nearby business"
                aria-label="Search nearby products"
                aria-describedby="basic-addon2"
                className="p-2 border-2 border-ezy-light-blue font-semibold"
                value={search}
                onChange={transcript}
              />
              <InputGroup.Text className="bg-ezy-light-blue" ref={microphoneRef}
                onClick={handleListing} style={{ cursor: 'pointer' }}>
                <AiFillAudio />
              </InputGroup.Text>
              <div>
          {isListening ? "Listening........." : "Click to start Listening"}
        </div>
              <InputGroup.Text className="bg-ezy-light-blue py-3">
                <Search />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default NavLocation;
