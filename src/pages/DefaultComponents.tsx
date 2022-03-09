import Button from '../components/Button';
import LinearProgress from '../components/LinearProgress';
import Input from '../components/Input';
import CardWithImage from '../components/CardWithImage';
import Message from '../components/Message';
import { Icon } from '@iconify/react';
import Divider from '../components/Divider';
import Modal from '../components/Modal';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Table from '../components/Table';
import Tooltip from '../components/Tooltip';
import Badge from '../components/Badge';

const DefaultComponents = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const showModal = () => {
    displayModal ? setDisplayModal(false) : setDisplayModal(true);
  };
  const [displayModal2, setDisplayModal2] = useState(false);
  const showModal2 = () => {
    displayModal2 ? setDisplayModal2(false) : setDisplayModal2(true);
  };
  return (
    <>
      <div className='m-10'>
        <NavBar />
        <LinearProgress variant='secondary' />

        <Button>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='success'>Success</Button>
        <Button variant='danger'>Danger</Button>
        <Button variant='warning'>Warning</Button>
        <Button variant='info'>Info</Button>
        <Button variant='light'>Light</Button>
        <Button variant='dark'>Dark</Button>
        <Button variant='link'>Link</Button>
        <Button variant='ghost'>Ghost</Button>

        <CardWithImage
          imageURL={'https://partneruniversity.microsoft.com/content/images/microsoft-img.png'}
          textImage={'Personalize your account with a photo. Your profile photo will appear on apps and devices that use your Microsoft account.'}
          bottomTitle={'Full name'}
          bottomValue={'John Madrigal'}>
          <Button variant='light'>Add Photos</Button>
        </CardWithImage>

        <Input />
        <Input variant='text' placeholder='text' />
        <Input variant='number' placeholder='number' />

        <Message variant='primary' title='Informational' icon={<Icon icon={'bi:info-circle-fill'} fontSize={12} color='#006FC9' />} />
        <Message variant='success' title='Success' icon={<Icon icon={'bi:check-circle-fill'} fontSize={12} color='#8BC540' />} />
        <Message variant='warning' title='Warning' icon={<Icon icon={'bi:exclamation-triangle-fill'} fontSize={12} color='#FFB901' />} />
        <Message variant='error' title='Error' icon={<Icon icon={'bi:x-circle-fill'} fontSize={12} color='#A80000' />} />
        <Message variant='primary' title='Informational' text='Lorem ipsum' icon={<Icon icon={'bi:info-circle-fill'} fontSize={20} color='#006FC9' />} />
        <Message variant='success' title='Success' text='Lorem ipsum' icon={<Icon icon={'bi:check-circle-fill'} fontSize={20} color='#8BC540' />} />
        <Message variant='warning' title='Warning' text='Lorem ipsum' icon={<Icon icon={'bi:exclamation-triangle-fill'} fontSize={20} color='#FFB901' />} />
        <Message variant='error' title='Error' text='Lorem ipsum' icon={<Icon icon={'bi:x-circle-fill'} fontSize={20} color='#A80000' />} />

        <Divider m={0} mt={10} mb={52} mr={5} ml={5} variant='primary' />

        <Button onClick={showModal}>Show modal</Button>
        <Modal
          state={displayModal}
          toggle={showModal}
          title={<h1>Edit name</h1>}
          content={
            <>
              <h2 className='pb-2'>First name</h2>
              <Input variant='text' placeholder='Enter your first name' />
              <h2 className='pb-2 pt-5'>Last name</h2>
              <Input variant='text' placeholder='Enter your last name' />
            </>
          }
          footer={
            <>
              <Button disable={true}>Add</Button>
              <Button variant='light'>Cancel</Button>
            </>
          }
          size='md'
        />
        <Button onClick={showModal2}>Show modal2</Button>
        <Modal
          state={displayModal2}
          toggle={showModal2}
          title={<h1>Edit name</h1>}
          content={
            <>
              <h2>Personalize your account with a photo. Your profile photo will appear on apps and devices that use your Microsoft account.</h2>
            </>
          }
          footer={
            <>
              <Button disable>Add</Button>
              <Button variant='light'>Cancel</Button>
            </>
          }
          size='md'
        />

        <Table />

        <Tooltip placement='top' text='Hovered'>
          <Button>Hover me</Button>
        </Tooltip>

        <Badge content={`99+`} offset={140}>
          <Button>I have a text badge!</Button>
        </Badge>
        <Badge content={2} offset={80}>
          <Button>Number</Button>
        </Badge>
        <Badge offset={150}>
          <Button>I dont have badge!</Button>
        </Badge>
      </div>
    </>
  );
};

export default DefaultComponents;
