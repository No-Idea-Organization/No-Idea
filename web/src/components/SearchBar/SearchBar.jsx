import { Form } from 'react-bootstrap';
import { useState } from 'react';

export const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchInput);
        setSearchInput("");
    }

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Control type='text' placeholder="Search" value={searchInput} onChange={(event) => (handleChange(event))}/>
        </Form>
    )
}