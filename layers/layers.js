var wms_layers = [];


        var lyr_Satlite_0 = new ol.layer.Tile({
            'title': 'Satélite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tms-pnoa-ma.idee.es/1.0.0/pnoa-ma/{z}/{x}/{-y}.jpeg'
            })
        });

        var lyr_Mapa_1 = new ol.layer.Tile({
            'title': 'Mapa',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://rts.larioja.org/rioja-relieve/{z}/{x}/{y}.png'
            })
        });
var format_Bodegas_2 = new ol.format.GeoJSON();
var features_Bodegas_2 = format_Bodegas_2.readFeatures(json_Bodegas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bodegas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bodegas_2.addFeatures(features_Bodegas_2);
var lyr_Bodegas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bodegas_2, 
                style: style_Bodegas_2,
                popuplayertitle: 'Bodegas',
                interactive: true,
                title: '<img src="styles/legend/Bodegas_2.png" /> Bodegas'
            });

lyr_Satlite_0.setVisible(false);lyr_Mapa_1.setVisible(true);lyr_Bodegas_2.setVisible(true);
var layersList = [lyr_Satlite_0,lyr_Mapa_1,lyr_Bodegas_2];
lyr_Bodegas_2.set('fieldAliases', {'nombre': 'nombre', 'telefono': 'Teléfono', 'direccion': 'Dirección', 'municipio': 'Municipio', 'provincia': 'Provincia', 'geocodigo': 'Ubicación', 'web': 'Página web', 'visitas': 'Visitas', 'hospedaje': 'Hospedaje', 'riojawine': 'Web Riojawine', });
lyr_Bodegas_2.set('fieldImages', {'nombre': 'TextEdit', 'telefono': 'TextEdit', 'direccion': 'TextEdit', 'municipio': 'TextEdit', 'provincia': 'TextEdit', 'geocodigo': 'TextEdit', 'web': 'TextEdit', 'visitas': 'TextEdit', 'hospedaje': 'TextEdit', 'riojawine': 'TextEdit', });
lyr_Bodegas_2.set('fieldLabels', {'nombre': 'inline label - always visible', 'telefono': 'inline label - always visible', 'direccion': 'inline label - always visible', 'municipio': 'inline label - always visible', 'provincia': 'inline label - always visible', 'geocodigo': 'inline label - always visible', 'web': 'inline label - always visible', 'visitas': 'inline label - visible with data', 'hospedaje': 'inline label - always visible', 'riojawine': 'inline label - always visible', });
lyr_Bodegas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});