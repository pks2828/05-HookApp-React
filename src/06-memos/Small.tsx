import React from 'react';

type SmallProps = {
    value: number;
};

export const Small = React.memo(({ value }: SmallProps) => {

    console.log('Me volví a llamar :(');

    return (
        <small> {value} </small>
    );
});