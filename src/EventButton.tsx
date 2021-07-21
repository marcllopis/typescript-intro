import React from 'react';

type Props = {
  handleEvent: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

const EventButton = ({handleEvent}: Props) => (
  <button onClick={handleEvent}>
    Events here!
  </button>
)

export default EventButton;
