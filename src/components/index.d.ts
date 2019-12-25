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
    inputRef: (func) => void;
  
    autoFormat: boolean;
    disableAreaCodes: boolean;
    disableCountryCode: boolean;
    disableDropDown: boolean;
    enableLongNumbers: boolean;
    countryCodeEditable: boolean;
  
    regions: string | Array<string>;
  
    localization: object;
  
    onChange: () => void;
    onFocus: () => void;
    onBlur: () => void;
    onClick: () => void;
    onKeyDown: () => void;
  
    isValid: () => void;
    isModernBrowser: () => void;
    onEnterKeyPress: () => void;
    keys: object;
  }
  declare const MaterialUiPhoneNumber =  React.ComponentType<MuiPhoneNumberProps>();
export default MaterialUiPhoneNumber