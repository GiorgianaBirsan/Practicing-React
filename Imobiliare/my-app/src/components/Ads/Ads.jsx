import { Flex } from '@chakra-ui/react';
import React from 'react';
import { AdItem } from '../AdItem';

export default function Ads(props) {
  const { listAds } = props;

  return (
    <>
      <Flex flexDirection="column" m="100px">
        {listAds.map((ad, index) => {
          return (
            <AdItem
              key={index}
              id={index}
              title={ad.title}
              description={ad.description}
              address={ad.address}
              price={ad.price}
              surface={ad.surface}
              phone={ad.phone}
              room={ad.room}
              editHandler={props.editHandler}
              deletehandler={() => props.deleteByIndex(ad.id)}
            />
          );
        })}
      </Flex>
    </>
  );
}