import React from 'react';
import { shallow } from 'enzyme';

import JobPortal from './JobPortal';


// describe("JobPortal Component Testing", () => {

//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<JobPortal />);
//   });
//   it("JobPortal Main Page test Testing", () => {

//     expect(wrapper.find("Header")).toHaveLength(1);

//   });
// });



describe('<JobPortal />', () => {
  const wrapper = shallow(<JobPortal />);

  it('renders <Header /> components', () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it('renders <Footer /> components', () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  // it('renders <Login /> components', () => {
  //   expect(wrapper.find("Login")).toHaveLength(1);
  // });
});
