import React, { useState } from 'react';
import {Wrapper, Container, Button, List, Item} from './style';

const DropDown = ({optionsList, selectedOption, setSelectedOption}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };
  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };


  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedOption(
          selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1
        );
        break;
      case "ArrowDown":
        e.preventDefault();
        setSelectedOption(
          selectedOption == optionsList.length - 1 ? 0 : selectedOption + 1
        );
        break;
      default:
        break;
    }
  };
  return (

    <Wrapper>
      <Container>
        <Button
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          onClick={toggleOptions}
          onKeyDown={handleListKeyDown}
        >{optionsList[selectedOption]}</Button>
        <List
          role="listbox"
          aria-activedescendant={optionsList[selectedOption]}
          tapIndex={-1}
          isactive= {isOptionsOpen}
          onKeyDown={handleListKeyDown}
        >
          {
            optionsList?.map((option, index)=>(
              <Item
                key={index}
                id={option}
                role="option"
                aria-selected={selectedOption == index}
                tabIndex={0}
                onKeyDown={handleKeyDown(index)}
                onClick={() => {
                  setSelectedThenCloseDropdown(index);
                }}
              >{option}</Item>
            ))
          }

        </List>
      </Container>
    </Wrapper>
  )
}

export default DropDown