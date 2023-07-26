import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import CarouselAllstate from "../components/CarouselAllstate";
import FooterAllstate from "../components/FooterAllstate";
import HeaderAllstate from "../components/HeaderAllstate";
import PaymentPlans from "../components/PaymentPlans";
import ResizeButton from "../components/ResizeButton";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id",
    localization: { locales: ["en"], primary: false },
    filter: { entityIds: ["4889249132731136925"] },
    fields: ["slug"],
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return `${document.slug}1`;
};

export default function NewSki() {
  return (
    <>
      <HeaderAllstate
        companyName="Allstate"
        links={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
          { name: "Contact", url: "/contact" },
          { name: "Services", url: "/services" },
        ]}
        fontSize="text-xl"
        fontWeight="font-bold"
        textColor="text-gray-800"
      />
      <CarouselAllstate
        slides={[
          {
            image: `https://img.freepik.com/free-photo/family-summer-forest-by-open-trunk_1157-35902.jpg`,
            title: `Car Insurance`,
            description: ` A company you can trust to protect your family.`,
          },
          {
            image: `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAowMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAIDBAUBBwj/xAA1EAABAwIFAgQEBAYDAAAAAAABAAIDBBEFEiExQQZREyJhcQcUMoEVI5GxFkJSocHwcoLh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAAICAwEBAQAAAAAAAAAAAQIREiEDMUETIgT/2gAMAwEAAhEDEQA/APFIYDKmTRhjrdlL4EjWk2ICrndXeihLiSSgySSSQD4nOa8FpsQt+jpK2qYB5spWBGbOuUb4JjdLFC0PDRYclaRGarHgdc02BcPZSnp2reBnLzfuUWUWLUtRq0sI9FovqoGgEltkJloFb0pKBexXB03Pe3mR0aynJFi23ouNLHOuAFO1AxvS8p3JUg6Wfzco8ha1w2Ce9sbdTYKeVOAH+FzyF3+GB/SjKWqp2blqg/EKU7lqOVVoJnpkf0BNb0429so/RGsT4J/pIK66lAdsjlSeVYphsmHTiWF2VzTcEcKtiGJVlVA2KcxhosTkZYk+qL+qofIRl2QZWMI4tonLs/ihnKS4d0lRCrEIoW0EhDQDbRCKKsXNsPehVPNHjJJJJZtCXVxJMOroJHK4vRugfhrPjLW12MiampNHRNsLyj19Eb0AVhD6p04jphK875WAn9kYjBuqqqCJ8OHVL43C7TcC/wCpXteEYLhuDR5MPo4KfuY2AZlfL7m3Cm+UcHilN0v1PCPEqKJwaBchsgJH91qUOdukwLXDcO4XrFhlOulrrHxOhpKkETRgO4c0WKP02VwClO61lysDjGbC6s1lE2jdeOTMzsd1CZQG6oDz/qV1XTtJjJWHQy11RJbMUe9QRNngOg19FiYNSCGoJI57K5IXKtXAPmY2hso+6KWEFuqz6YNdawAKtNdlUU5WH1BEH6aIXxigHgh2XjstPq/EDTk5XEFZPzxqqJvmJu3dOGGDBqdElecyziEloja1jDx8iR3KGkQYvrSgLEMZRlBh6RLq6WkJWU6WakpoYHyHyhWDh8oF7HVGi2IvhXDTz9WQCpa14axxY1zc3m0X0VTnMzTQDheUfC/o2bCnfjWKAsqHtywQctaf5nep7L1GFxG19+11jne9NJj1tZksFFI8NZdKpdkizP0A9NVkR4nBUCSKGQOcDlLeQfUKLVyLT6wizQdXaKlWYgzOYfqeBc+gSmhf47bcCy886o6kqcHxxraiJzad7cvlFy89/b/3RKbqrJ9ElfiEJBjdcXOh7FZNZPlYNdDqsusrfmq1sDmPhllbdmZhF+VE6WWWB0cgdni01HotMMu9I8ni1jyX3ObNlBdynMgiyEtNiFRomPcBe6tPa9kTjqttOZNRT/nZL63stnLdoKE6GQ/O/dF8NjGErDleb9ftOce6ycLhf8sDYjTREnW8Ae8e6io44WYY0htnZEKD7j5jfe6SbIbyO90logzE33hAVAbBT17yWtHoqocbbopz0bKohupJEwJKbeGRNOTWy2o4mxSRS75HB36FDtFKWZfNsibp+hqcdro6WnJ1+p3YIS9hpKsTwxSQNztkyuudmgi6fX101NWYZHE5rWTz5JC4X4JA/su/hZwjCqeKnDnxwtDX9/dZ2NV7InUTmi5jqGP17f7dcN6yds/rHpvY1gn4pRS07qyoiztIBiflI+4WF0f0W3ApZpJquSokkP1Otew0F9NdkXeI17GyF12uF9FxshLXOFm9rrTeumUn1DNCzNm3KFOpsPgqWiV9O2Z0b87Q5t7EdlJ1D1TDhhfE6eLx2eaz3Bo9v3/QoYwP4gR4/iv4Y6j8N8gdaVpFjYG6OFs2Ocl0rdTzMdPQ1bG38N4uANddCP8AeyjYWyzyPJADm2Df6iOfRTSUz6jFoqORzmU75M59PRd6ipmYfiAkjdZjm2y8e/onjj3KeeckuNXsPpmaaBWqmBghd5RssWhxVrNypqrGIzG4Zhsuhys0sayt0sPMiWmP5Y9kEOxAGqvcWutuDF2CMAu/RFgZXW0mUXG6x4q5ow4Mtrl3UnVNWKgHKbofbO4Rhh3ta6Wlw10nmOvKSljoDIwOLzqkrSrVYL3NAXPlHjgp9LmbUNdIDl5uiEvp3Nu2yekWheSB4GxUORw4KJpDA7SwVZ0Ebtmo0cyZkDbi2q9t+EOFNp8MNW5vnlPI4XlMNFdws1e6/D9rm9P09xwoz6ise6KWgW83PdYlXgdNJW/M2O1snC3CNNUx2g12XNZL7bY2z0owfkPbA/SM7XVtwDWkDX7qOoa2aM6C9uUN4piMlCx8bczj/wA9vdFOS29Br4o0cFZC1gt4pePNkFh73Qn0Rh9FhVYat07J3asEo+lvsPXujB4OINdNPCHu0AznMBp2WTWs8V5jjYCAdbCwT/aa0qf57afVTeNVh7Hnyu0sdk7qa9RBG4kuc1up5TqGkOe7uO42UtfTuMzWXu17dPdPCp8k+A2QPbsVWkdJyStyow+Rry1w140VWSkbCLvILv2XQ52QI3XuQV10jhyVame29gqjxdPRqVU5zu6pPBButGVqruYkNoG1L2tAGwSTvD9ElWiWzTsI1cnRQsZb8w/qoix5T/BcANCSdrIJK9jW2ykn3XGvLTsnxwyEDyn7qeOlJ3F0DbsEzriy996XibDgtK0Ny/ljT7LwyClOdoDbEkcr3XB3huGU7dARGP2Wfk9KwvbTdmI8psoX+M0EnI/0tZObK3YkXUpy2BesK1lY1XKYnEk5HOOt9lm1QhkDiYwZLWcO/wBuVvVroHSRwyw5hKSxpPsT/gofr6eGkbnY95ykZYyL2BNt0a2N67ZjaaZ7fl4mEue45Wg8cpVnTdYyElj2i2oawf5RXRUfyrHSzD80i1mi+Xmy49/iRkAlp4uo4Rr+2XuAajpZYyQ9xzX1zDVLEG+HD4gID4zey2a4shkLn2Dhug/HOo6OlkymRrnH+QG60xwZZeS5XaxVY7hzqbJUysZKRZuut0I1NcJJCcxIvoUOTxCWtfOwkNc4loPCsXPdb4zTPLVrRfO08qN0zbbqkDdcI1VJWHEO2KicCLm4UbrW0uo3FyYSZvZJVy4pIAhijPZWWttu3+wUscWmysNjHZNmjisP5FYa4f0D7hJkY9E4t1QEkT2E/S3Q8NRJRVbjCAJXCwt9RQyw2O2i1KKYW2U04IGYjVxua5tQ424OoWhWdVmCjjy0ksshe1r8hGgvqdVgtlYQLrkkjTwLKOMXLVPF+v8AEZq+MRYHURwQP8Rt5AS8ji3FxdYWG9WdRS4pBNXYf4tOyYvcweU24bf3sfsiCRpkcBG3M47AKGcU+HDPXPzS7tpo3a/9jwjjByrYqviLT08UUb4ZSHaTVGUhsbu1rX9Fiy/EqhqqapMZkjlaweG1zDdxB4WTiWJCsY1sjWtjZ9ETBZjft39Vjh8Ud8kYbfewR+cPlWhjfU9bXksw1j8rhZ0j2ED9ChmLCnGQy1Bc551Jctf5tw2umOqe4VyaLasaVrUwwAbEKd811EXF38wH2T0SAx2PB+y4YyNx9lLpy7N90xztwLBBopm+GLZRm5VZ5cQp3G2ijcgK+VcUqSAMmeynba2qhj2UjvpTZOlwB0TDLqmu2UY3QEzZbHUK5DUkbBZ/b3VmHZKw2nFUk/UrsceduaV+RnuqOHAFxuE7GCQGgEgdlKofW4qynaYqAZb6GTlDtRIXkuc4kncnlTSqud05DV3m42UDmk7BXHAdlDLsmFYgDdLykbhMkJUKAld4fKic5vCY7dNQbhconklPKY5ARm6Y4kKQ7KF6AbmSTUkB/9k=`,
            title: "Slide 2",
            description: "This is the second slide",
          },
          {
            image: "https://example.com/slide3.jpg",
            title: "Slide 3",
            description: "This is the third slide",
          },
        ]}
      />
      <PaymentPlans
        title="Choose a Plan"
        plans={[
          {
            name: "Basic Plan",
            price: 19.99,
            features: ["Feature 1", "Feature 2", "Feature 3"],
          },
          {
            name: "Premium Plan",
            price: 29.99,
            features: ["Feature 1", "Feature 2", "Feature 3"],
          },
          {
            name: "Ultimate Plan",
            price: 39.99,
            features: ["Feature 1", "Feature 2", "Feature 3"],
          },
        ]}
      />
      <ResizeButton text={`This button resizes`} />
      <FooterAllstate
        companyName="Allstate"
        slogan={`Allstate is awesome.`}
        links={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
          { name: "Contact", url: "/contact" },
          { name: "Terms of Service", url: "/terms" },
        ]}
        fontSize="text-base"
        fontWeight="font-normal"
        textColor="text-white"
      />
    </>
  );
}
