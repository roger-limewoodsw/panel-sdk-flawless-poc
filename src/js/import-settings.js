

export var getImportSettingsXml = function() {
    return importSettingsXml;
}

const importSettingsXml = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<!DOCTYPE Avid:StreamItems SYSTEM "AvidSettingsFile.dtd">
<Avid:StreamItems xmlns:Avid="http://www.avid.com">

  <Avid:XMLFileData>
    <AvProp name="DomainMagic" type="string">Domain</AvProp>
    <AvProp name="DomainKey" type="char4">1480739396x</AvProp>
    <AvClass id="SETG"/>
    <AvClass id="IMst">
      <AvProp id="ASET" name="name" type="string">replace-name</AvProp>
      <AvProp id="ASET" name="kind" type="string">Import</AvProp>
      <AvProp id="ASET" name="attributes" type="int16">1</AvProp>
      <AvProp id="ASET" name="type" type="int16">18</AvProp>
      <AvProp id="IMst" name="version" type="int16">1</AvProp>
      <AvProp id="IMst" name="iKeyColor" type="int16">0</AvProp>
      <AvProp id="IMst" name="iKeyColor" type="int16">0</AvProp>
      <AvProp id="IMst" name="iKeyColor" type="int16">0</AvProp>
      <AvProp id="IMst" name="iImportPICTSeq" type="Boolean">FALSE</AvProp>
      <AvProp id="IMst" name="iIgnoreAlpha" type="Boolean">FALSE</AvProp>
      <AvProp id="IMst" name="iUseKeyPicker" type="Boolean">FALSE</AvProp>
      <AvProp id="IMst" name="iInvertAlpha" type="Boolean">TRUE</AvProp>
      <AvProp id="IMst" name="iAspect" type="int16">2</AvProp>
      <AvProp id="IMst" name="iColorLevel" type="int16">1</AvProp>
      <AvProp id="IMst" name="iFormat" type="int16">2</AvProp>
      <AvProp id="IMst" name="iDuration" type="int32">30</AvProp>
      <AvProp id="IMst" name="iShotLogMode" type="int16">0</AvProp>
      <AvProp id="IMst" name="iOMFICompression" type="int16">0</AvProp>
      <AvProp id="ASET" name="attrList" type="reference">
        <AvClass id="ATTR">
          <AvProp id="ATTR" name="__OMFI:ATTR:NumItems" type="int32">35</AvProp>
          <List id="OMFI:ATTR:AttrRefs">
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_DOMINANCE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_IMPORTASPECT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">2</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_IMPORTACTIVETAB</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_AUD_SAMPRATE_CVT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_AUD_SAMPSIZE_CVT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_AUD_PD_SAMPRATE_CVT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_AUD_BWF_MONO_GROUP</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_AUD_USE_BW_CLIPNAMES</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_AUD_USE_GAIN</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_AUD_GAIN</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_AUD_AUD_CD_ONLY</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_AUD_SUBFRAME_ALIGN</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_AUD_CENTER_PAN</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_IMPORTXDCAMOVERRIDE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_IMPORTXDCAMBATCHHI</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_IMPORTXDCAMHANDLE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">30</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_IMPORTXDCAMAUTODETECT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_IMPORTXDCAMESSENCEMARKS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_IMPORTXDCAMUPCONVAUDIO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_IMPORTXDCAMUPCONVAUDIOQUAL</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">2</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_IMPORTXDCAMUSEGOODSHOTFLAG</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_IMPORTXDCAMMAXAUDIOCHANNELS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">16</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_SHOTLOGMODE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_OMFI_COMPRESSION</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_IM_COLOR_LEVEL</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_IM_IGNORE_ALPHA</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_IM_INVERT_ALPHA</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_IM_SFI_DURATION</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">30</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_IM_AUTODETECT_SF</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_IM_DO_FAST_IMPORT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_MULTICHANNEL_AUDIO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string"></AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_ALPHA_UNCOMPRESSED</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_FILTERING</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_ALPHA_SOFTWARE_RLE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_ATN_IMPORT_REPORTMASK</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">16847104</AvProp>
            </ListElem>
            <ListElem/>
          </List>
        </AvClass>
      </AvProp>
    </AvClass>
  </Avid:XMLFileData>

</Avid:StreamItems>
`;