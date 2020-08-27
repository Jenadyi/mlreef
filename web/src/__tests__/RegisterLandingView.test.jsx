import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import RegisterLandingView from 'components/RegisterView/RegisterLandingView';
import { storeFactory } from '../functions/testUtils';
import { userProfileMock } from '../testData';

const store = storeFactory({
  user: userProfileMock,
});

const setup = () => {
  const wrapper = shallow(
    <RegisterLandingView store={store} />,
  );
  const afterDive = wrapper.dive().dive();
  return afterDive;
};

describe('render basic landing view elements', () => {
  const wrapper = setup();
  test('assert that snapshot matches', () => {
    const snapShot = renderer.create(<RegisterLandingView store={store} />).toJSON();
    expect(snapShot).toMatchSnapshot();
  });

  test('aseert that user name matches', () => {
    expect(wrapper.find('.title-lg').text()).toEqual('Welcome to MLReef@mlreef');
  });

  test('assert all user options are displayed', () => {
    expect(wrapper.find('.option-link')).toHaveLength(4);
  });
});