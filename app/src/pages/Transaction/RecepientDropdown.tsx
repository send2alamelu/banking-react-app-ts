import { useEffect, useState } from "react";
import Dropdown from "../../components/Fields/Dropdown/Dropdown";
import useGet from "../../hooks/useGet";
import { GetResponse } from "../../types/ApiResponse";
import { getPayeeApiPath } from "../../utils/Api";

interface Props {
  onChange: Function;
}

function RecepientDropdown(props: Props) {
  const getPayee: GetResponse = useGet(getPayeeApiPath());
  const [recepientList, setRecepientList] = useState([]);

  useEffect(() => {
    const recepients = getPayee?.response?.data || []
    if (recepients.length > 0) {
      setRecepientList(recepients.map(((recepient: any) => ({
        value: recepient.accountNo,
        label: recepient.accountHolderName,
      }))));
    }

  }, [getPayee?.response]);

  return (
    <Dropdown label="Recepient" items={recepientList} onChange={props.onChange} />
  )
}

export default RecepientDropdown