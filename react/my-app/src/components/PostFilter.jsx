import React from 'react';
import MyInput from './Ui/input/MyInput';
import MySelect from './Ui/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    if(!postMessage.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Посты не были найдены!</h1>
        )
    }
    return (
        <div>
        <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder={'Search...'}
        />
          <MySelect
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort })}
            defaultValue="Сортировка"
            options={[
              { value: 'title', name: 'По названию' },
              { value: 'body', name: 'По описанию' }
            ]}
          />
        </div>
    )
}

export default PostFilter