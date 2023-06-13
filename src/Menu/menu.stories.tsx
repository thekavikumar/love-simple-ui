import React from 'react';
import CustomMenu from './CustomMenu';
import { Story } from '../types';

interface StoriesProps {
  stories: Story[];
}

const Stories: React.FC<StoriesProps> = ({ stories }) => {
  const handleOptionSelect = (option: string) => {
    console.log('Selected option:', option);
    // Perform any action based on the selected option
  };

  return (
    <div>
      <h1>Stories</h1>
      <CustomMenu
        options={['Option 1', 'Option 2', 'Option 3']}
        onSelectOption={handleOptionSelect}
      />
      {stories.map((story) => (
        <div key={story.id}>
          <h3>{story.title}</h3>
          <p>{story.content}</p>
          <p>Author: {story.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;

/*The CustomMenu component is used with some example options (['Option 1', 'Option 2', 'Option 3']). You can customize these options according to your needs. The onSelectOption callback is passed to the CustomMenu component to handle the selection of an option. In this example, the selected option is logged to the console, but you can perform any action based on the selected option.
*/