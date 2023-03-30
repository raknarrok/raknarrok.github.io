'use strict';

/**
 * @Name showSection
 * @Summary This method show the section according the button selected.
 * @Author Luis Fernandez 
 * @param idSection
 */

function showSection(idSection) {
    $(`#${idSection}`).css('display', 'block');
}

/**
 * @Name closeSection
 * @Summary This method hidde the section according the button selected.
 * @Author Luis Fernandez 
 * @param idSection
 */

function closeSection(idSection) {
    $(`#${idSection}`).css('display', 'none');
}