import * as React from "react";
export interface MuiPhoneNumberProps {
    classes: object;
  
    excludeCountries?: Array<string>;
    onlyCountries?: Array<string>;
    preferredCountries?: Array<string>;
    defaultCountry?: string;
  
    value: string;
    placeholder: string;
    disabled: boolean;
    error: boolean;
    variant: string;
    native: boolean;
  
    inputClass: string;
    dropDownClass: string;
    InputProps: object;
    inputProps: object;
    inputRef: (ref : any) => void;
  
    autoFormat: boolean;
    disableAreaCodes: boolean;
    disableCountryCode: boolean;
    disableDropDown: boolean;
    enableLongNumbers: boolean;
    countryCodeEditable: boolean;
  
    regions: string | Array<string>;
  
    localization: object;
  
    onChange: (newFormattedNumber: string , countryData : any) => void;
    onFocus: (event: any, countryData : any ) => void;
    onBlur: (event: any, countryData : any ) => void;
    onClick: (event: any, countryData : any ) => void;
    onKeyDown: (event: any) => void;
  
    isValid: (code : string) => boolean;
    isModernBrowser: () => any;
    onEnterKeyPress: (event: any) => void;
    keys: object;
  }
  declare const MaterialUiPhoneNumber =  React.ComponentType<MuiPhoneNumberProps>();
export default MaterialUiPhoneNumber