import React from 'react';
import './listbox.css';
import classNames from 'classnames';

type Props = {}

export default function ListBox(props : React.HTMLProps<HTMLDivElement>)
{
    // props 를 통해 클래스명을 받는다
    // ListBox 컴포넌트를 사용하는 곳에서 클래스명을 작성
    // 작성된 클래스명을 listbox.css 에서 반영
    const {className} = props;
    const mixClassName = classNames('box-style1', className)        // class='box-style1 box-style2'

    return (
        <div {...props} className={mixClassName}>
        </div>
    )
}

// pip install classnames (클래스 이름을 추가해줌)