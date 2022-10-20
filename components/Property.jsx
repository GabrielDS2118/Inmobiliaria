import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0px"
      justifyContent="flex-start"
      cursor="pointer"
    >
      {/* //Mostrar imagenes de los apartamentos */}
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          width={400}
          height={260}
        />
      </Box>

      <Box w="full">

        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">

          <Flex alignItems="center">

            {/* Icono de verificacion */}
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>

            {/* Precio y frecuencia 
                La funcion millify formatea los precios para quitarle numeros
            */}

            <Text fontWeight="bold" fontSize="lg">
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>

          </Flex>

          <Box>
            <Avatar size="sm" src={agency?.logo?.url}></Avatar>
          </Box>

        </Flex>

        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>

        {/* Si el titulo tiene más de treinta caracteres solo se mostrarán 30 */}
        <Text fontSize="lg">
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </Text>

      </Box>
    </Flex>
  </Link>
);

export default Property;
