import * as React from "react";

const MyIdField = ({ record, source }) => {parseInt(record[source].id.substring(record[source].id.length - 2))}
    

export default MyIdField;