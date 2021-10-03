import S from 'src/styles/pages/dashboard/index.module.scss';
import { Card, ChartFilter } from '../shared';
import { Box, SVGIcon, ButtonMenu } from 'src/components';
import AreaChart from './AreaChart';

const BottomLeftSection = (): JSX.Element => {
  return (
    <Card as="section" className={`${S.BottomLeftSection}`}>
      <Box className="d-flex align-items-center m-0">
        <Box as="h2" className="h6">
          Task Activities
        </Box>

        <Box className={`${S.keyFilterWrapper} d-flex align-items-center ms-auto`}>
          <ChartFilter />
        </Box>

        <ButtonMenu
          buttonType="icon-button"
          buttonClassName="more-button"
          buttonConstantContent={<SVGIcon name="more" fontSize="inherit" />}
          options={[{ value: 'lorem' }, { value: 'ipsum' }, { value: 'dolor' }]}
        />
      </Box>

      <AreaChart />
    </Card>
  );
};

export default BottomLeftSection;
