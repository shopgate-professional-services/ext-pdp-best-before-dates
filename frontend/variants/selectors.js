import { createSelector } from 'reselect';
import { getProductVariants } from '@shopgate/engage/product';
import { bbdProperty } from '../config';

/**
 * @param {Object} productData .
 * @returns {{ label: string, value: string }[]}
 */
const getBestBeforeLineFromProduct = (productData) => {
  if (!productData) {
    return null;
  }

  const { additionalProperties } = productData || {};
  if (!additionalProperties) {
    return null;
  }

  return additionalProperties.find(p => p.label === bbdProperty) || null;
};

/**
 * @returns {null|Object[]}
 */
export const getBestBeforeLines = createSelector(
  getProductVariants,
  (variants) => {
    if (!variants) {
      return null;
    }

    const lines = variants.products.map((variant) => {
      const property = getBestBeforeLineFromProduct(variant);
      if (!property || !property.value) {
        return null;
      }

      // Map characteristics into human presentation
      const labels = Object.keys(variant.characteristics).reduce((acc, charId) => {
        const { values } = variants.characteristics.find(ch => ch.id === charId);
        const { label } = values.find(v => v.id === variant.characteristics[charId]) || {};
        if (label) {
          acc.push(label);
        }
        return acc;
      }, []);

      return {
        ...property,
        label: labels.join(' ').trim(),
      };
    }).filter(Boolean);

    return lines.length ? lines : null;
  }
);
