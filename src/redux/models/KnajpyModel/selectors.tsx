import { domain } from 'redux/models/KnajpyModel';
import { Knajpa, KnajpyModelStateFields, KnajpyModelStateInterface } from 'redux/models/KnajpyModel/types';
import { createSelector } from 'reselect';
import { Maybe } from 'types';

export const selectKnajpyDomain = (state) => state.get(domain) as KnajpyModelStateInterface;

export const selectKnajpy = createSelector(
  selectKnajpyDomain,
  (domain) => {
    return domain.get(KnajpyModelStateFields.KNAJPA_DETAILS) as Map<string, Knajpa>
  }
);

// args: id
export const selectKnajpa = createSelector(
  selectKnajpy,
  (_, args: { id: string }) => args.id,
  (knajpy, id) => {
    return knajpy.get(id);
  }
)

// args: id
// export const selectKnajpaName = createSelector(
//   selectKnajpa,
//   (knajpa) => {
//     return knajpa.get('name');
//   }
// )