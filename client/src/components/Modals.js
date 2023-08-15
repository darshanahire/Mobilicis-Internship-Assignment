import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Https from "../servises/Https"

function Example(props) {
  console.log(props.data);
  
  const [show, setShow] = useState(props?.show);
  const [inputData,setInputData] = useState(props.data.value);

  function handdleChange(e){
    const {name,value} = e.target;
    setInputData({name : value})
  }
  function handdleArrChange(e){    
    const {name,value} = e.target;
    const keyOrVal = name.charAt(name.length - 1);
    const idx = parseInt(name.slice(0, -1));
    const temp = [...inputData];    
    if(keyOrVal=='$'){ 
      temp[idx].certName = value
    }
    else {
      temp[idx].provider = value;
    }
    setInputData(temp);
  }

  function handdleExpChange(e){    
    const {name,value} = e.target;
    const keyOrVal = name.charAt(name.length - 1);
    const idx = parseInt(name.slice(0, -1));
    const temp = [...inputData];
    
    if(keyOrVal=='!'){ 
      temp[idx].exp = value
    }
    else if(keyOrVal=='@') {
      temp[idx].type = value;
    }
    
    else if(keyOrVal=='#'){ 
      temp[idx].company = value
    }
    else {
      temp[idx].role = value;
    }
    setInputData(temp);
  }

  function handdleSkillChange(e){    
    const {name,value} = e.target;
    const temp = [...inputData];    
    temp[name] = value;
    setInputData(temp);
  }


  const handleClose = () =>{    
     if(inputData !== props.data.value){
       handleSubmit();
      }      
     setShow(false);
  }
  const handleCancel = () =>{    
     props.fun(false);
     setShow(false);
  }


  function addCertificate(){
    const temp = [...inputData,{certName:"temp1",provider:"temp2"}];    
    setInputData(temp);
  }
  function addSkills(){
    const temp = [...inputData,""];    
    setInputData(temp);
  }
  function deleteArrElem(e){
    const index = e.target.name; 
    setInputData([
      ...inputData.slice(0, index),
      ...inputData.slice(index + 1)
    ]);  
  }

function addExp(){
   const temp = [...inputData,{exp:"",type:"",company:"",role:""}];    
  setInputData(temp);
}

 const handleSubmit = () =>{    
    const _id = localStorage.getItem("userid");    
    const obj = {_id,'key' : props.data.name.toLowerCase(),'value': inputData.name ? inputData.name : inputData};

    Https.Update(obj).then((res)=>{
      props.fun(obj);      
    }).catch((err)=>{
      alert(err)
    })
 }
  return (
    <>
      <Modal className="modall" show={show} onHide={handleClose}  centered>
        <Modal.Header closeButton onClick={handleCancel}>
          <Modal.Title>Update Your {props.data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.data.mno === 1 ? <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{props.data.name} :</Form.Label>
              <Form.Control
                type={props.data.type}
                placeholder={"Enter your "+props.data.name}
                autoFocus
                defaultValue={props.data.value}
                onChange={handdleChange}
              />
            </Form.Group>
            </Form> :<></>
          }   
          {props.data.mno === 2 ? <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{props.data.name} :</Form.Label>
              <Form.Control
                type={props.data.type}
                placeholder={"Enter your "+props.data.name}
                autoFocus
                defaultValue={props.data.value}
                onChange={handdleChange}
                as="textarea" rows={3}
              />
            </Form.Group>
            </Form> :<></>
          }
          {props.data.mno === 3 ? <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{props.data.name} :</Form.Label>
              {                
              inputData?.map((curr,key)=>{              
              return <div key={key} className='flex my-2'>
              <Form.Control
                type={props.data.type}
                placeholder={"Enter your "+props.data.name}
                autoFocus
                defaultValue={curr}
                onChange={handdleSkillChange}
                name={key}
              />
              <Button name={key} className="delete-btn" variant="danger" onClick={(e) => {deleteArrElem(e)}}>
            <img src="./img/delete2.png" alt="" />
          </Button>
              </div>
          })
          }
            </Form.Group>
            </Form> :<></>
          }
          {props.data.mno === 4 ? <Form>
            <Form.Group className="flex" controlId="exampleForm.ControlInput1">
              <Form.Label className="w-50 text-center"><h6 className='m-0'>Certification Name</h6></Form.Label>
              <Form.Label className="w-50 text-center"><h6 className='m-0'>Certification Provider</h6></Form.Label>
            </Form.Group>
            {inputData.map((curr,key)=>{              
              return <div key={key}>
              <Form.Group className="mb-3 flex " controlId="exampleForm.ControlInput1">
                <Form.Control
                  className='mr-3'
                  type={props.data.type}
                  placeholder={"Enter Name"}
                  autoFocus
                  defaultValue={curr.certName}
                  onChange={handdleArrChange}
                  name={key+'$'}
                />
                <Form.Control
                  type={props.data.type}
                  placeholder={"Enter Provider"}
                  autoFocus
                  defaultValue={curr.provider}
                  onChange={handdleArrChange}
                  name={key+'#'}
                />
            <Button name={key} className="delete-btn" variant="danger" onClick={(e) => {deleteArrElem(e)}}>
                <img src="./img/delete2.png" alt="" />
            </Button>
            </Form.Group>
            </div>
            })}
            </Form> :<></>
          }

          {props.data.mno === 5 ? <Form>
            <Form.Group className="flex" controlId="exampleForm.ControlInput1">
            </Form.Group>
            {inputData.map((curr,key)=>{              
              return <div key={key}>
                <Form.Label className="w-50"><h6 className='m-0'>Experiance Details : {key+1} </h6></Form.Label>
              <Form.Group className="mb-3 flex " controlId="exampleForm.ControlInput1">
                <Form.Control
                  className='mr-3'
                  type={props.data.type}
                  placeholder={"Enter Your Experience"}
                  autoFocus
                  defaultValue={curr.exp}
                  onChange={handdleExpChange}
                  name={key+'!'}
                />
                <Form.Control
                  // className='mr-3'
                  type={props.data.type}
                  placeholder={"Enter Job Type"}
                  autoFocus
                  defaultValue={curr.type}
                  onChange={handdleExpChange}
                  name={key+'@'}
                />
                </Form.Group>
              <Form.Group className="mb-3 flex " controlId="exampleForm.ControlInput1">
                <Form.Control
                  className='mr-3'
                  type={props.data.type}
                  placeholder={"Enter Your Company Name"}
                  autoFocus
                  defaultValue={curr.company}
                  onChange={handdleExpChange}
                  name={key+'#'}
                />
                <Form.Control
                  type={props.data.type}
                  placeholder={"Enter Role"}
                  autoFocus
                  defaultValue={curr.role}
                  onChange={handdleExpChange}
                  name={key+'$'}
                />
            </Form.Group>
            <Button name={key} className="delete-exp" variant="danger" onClick={(e) => {deleteArrElem(e)}}>
                <img src="./img/delete2.png" alt="" />
            </Button>
            <hr />
            </div>
            })}
            </Form> :<></>
          }

        </Modal.Body>
        <Modal.Footer>
          {props.data.mno === 3  ? 
          <Button className="modal-btn" variant="success" onClick={addSkills}>
            Add New Skill
          </Button> 
          : <></>
          }
          {props.data.mno === 4  ? 
          <Button className="modal-btn" variant="success" onClick={addCertificate}>
            Add New
          </Button>
          : <></>
          }
          {props.data.mno === 5  ? 
          <Button className="modal-btn" variant="success" onClick={addExp}>
            Add New Exp.
          </Button>
          : <></>
          }
          <Button className="modal-btn" variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button className="modal-btn" variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;