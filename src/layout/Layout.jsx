// React Imports
import { createContext, useState } from "react";

// React Router Dom Imports
import { Outlet } from "react-router-dom";

// Components
import NavigationBar from "../Components/NavigationBar";

// Sass
import "../Sass/Layout.scss"

// Context
export const Context = createContext();

// Layout Component
const Layout = () => {
    // useState to store and update the recieved json data and address
    const [address, setAddress] = useState("");
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    // first endpoint (address)
    const address_api_key_one = `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}`
    const project_id_one = "mainnetQHK7RB25Tw0Q2swWPBlr0ToDfX24jW6i"

    // second endpoint (transactions)
    const address_api_key_two = `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}/transactions`
    const project_id_two = "mainnetQHK7RB25Tw0Q2swWPBlr0ToDfX24jW6i"

    // third endpoint (utxos)
    const address_api_key_three = `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}/utxos`
    const project_id_three = "mainnetQHK7RB25Tw0Q2swWPBlr0ToDfX24jW6i"

    // fetch endpoint
    // function to get the address endpoint using fetch API
      const handleSubmit = async (e) => {
        // prevent the browser from reloading when the user search for an address
        e.preventDefault();
        if(address){
        // try to fetch the api from the endpoint
        try {
          // address 
          const addressResponse = await fetch(address_api_key_one, {
            headers: {
              'Content-Type': 'application/json',
              'project_id': project_id_one,
            },
          });
          // transactions
          const transactionResponse = await fetch(address_api_key_two, {
            headers: {
              'Content-Type': 'application/json',
              'project_id': project_id_two,
            },
          });
          // utxos
          const utxosResponse = await fetch(address_api_key_three, {
            headers: {
              'Content-Type': 'application/json',
              'project_id': project_id_three,
            }
          });
          // Check if the response (data been fetched) is ok
          if (!addressResponse.ok || !transactionResponse.ok || !utxosResponse.ok) {
            let errorMessage = "Failed to fetch data from the Blockfrost API"
            // check if the response is not found
            if(addressResponse.status === 400){
              errorMessage = "Address not found"
            } else if (transactionResponse.status === 400) {
                errorMessage = "Transaction history not found"
            } else if (utxosResponse.status === 400) {
              errorMessage = "Utxos not found"
            }
            throw new Error(errorMessage);
          }
          // Convert the recieved json data from string to object
          const jsonAddressData = await addressResponse.json();
          const jsonTransactionData = await transactionResponse.json();
          const jsonUtxosData = await utxosResponse.json();
          // console.log the data recieved from the endpoint to check if there is an error
          console.log(jsonAddressData);
          console.log(jsonTransactionData);
          console.log(jsonUtxosData);
          // create an object to store the recieved data
          const addressData = {
            // address
            address: jsonAddressData.address,
            stakeAddress: jsonAddressData.stake_address,
            type: jsonAddressData.type,
            amountUnit: jsonAddressData.amount[0].unit,
            amountQuantity: jsonAddressData.amount[0].quantity,
            script: jsonAddressData.script,
            balance: jsonAddressData.balance,
            // transaction
            txHash: jsonTransactionData[0].tx_hash,
            blockTime: jsonTransactionData[0].block_time,
            blockHeight: jsonTransactionData[0].block_height,
            txIndex: jsonTransactionData[0].tx_index,
            // utxos
            utxos: jsonUtxosData,
          }
          // set the data by passing the object inside the setData function
          setData(addressData)
          // set the input field to be empty after a user submits 
          setAddress(" ")
          setError(null)
          // catch any error if there is a problem fetching the data
        } catch (error) {
          console.error(error);
          setAddress("")
          setData([null])
          setError(error);
        }
        }
      };

    return ( 
      <Context.Provider value={{handleSubmit, data, address, setAddress, error}}>
        <NavigationBar/> 
        <main className="layout-main">
          <Outlet />
        </main>
      </Context.Provider>
    );
}
 
export default Layout;