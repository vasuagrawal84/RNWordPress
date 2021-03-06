import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, Keyboard } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, PasswordInput, BlogList } from '../../../components';
import ROUTES from '../../../constants/routeNames';

const DATA = [
  {
    id: 57,
    date: '2020-05-07T23:12:51',
    date_gmt: '2020-05-07T23:12:51',
    guid: {
      rendered:
        'https://js1.10up.com/2020/05/07/modi-qui-dignissimos-sed-assumenda-sint-iusto/',
    },
    modified: '2020-05-07T23:12:51',
    modified_gmt: '2020-05-07T23:12:51',
    slug: 'modi-qui-dignissimos-sed-assumenda-sint-iusto',
    status: 'publish',
    type: 'post',
    link:
      'https://js1.10up.com/2020/05/07/modi-qui-dignissimos-sed-assumenda-sint-iusto/',
    title: {
      rendered: 'Modi qui dignissimos sed assumenda sint iusto',
    },
    content: {
      rendered:
        '<h3>Fugit nemo placeat eos aliquam repellendus. Qui maxime quam hic sit</h3>\n<p><img class="alignleft" alt="Autem ea laborum iste adipisci sed maxime animi est labore sit" src="https://js1.10up.com/wp-content/uploads/2020/05/88670812-1b59-3095-9c92-8ae541f3b6d2.jpg"></p>\n<h2>Maxime atque animi et nihil et. Distinctio adipisci doloremque placeat consectetur aut blanditiis sint</h2>\n<p><!--more--></p>\n<blockquote><p>Totam eos eos eligendi voluptas voluptates eaque. autem magnam quam voluptatem autem. Voluptatem consectetur <a title="At facilis eaque." href="https://www.swift.com/illo-illum-deleniti-et-quia">accusamus aspernatur</a> voluptates facilis. Voluptas <a title="Consequuntur eligendi." href="http://www.littel.com/minima-voluptas-eos-magnam-dolores-porro-sunt.html">deleniti aperiam aut omnis</a> Consectetur officiis cupiditate voluptates <a title="Hic." href="http://pagac.com/perspiciatis-qui-aut-ad-iste">iure maiores. Debitis voluptatem</a> optio omnis. Officia excepturi eum <a title="Quia sint eaque." href="http://www.kutch.org/">molestiae</a> aut. Saepe ipsum reprehenderit qui est. Quod placeat ducimus reprehenderit dolores maiores placeat architecto. Voluptates et <a title="Deleniti ullam modi." href="http://www.runte.com/fuga-nostrum-totam-voluptas-fuga-hic-sunt"><a title="Nihil laboriosam officiis optio." href="http://www.hammes.com/non-qui-dolore-sit-tenetur-veritatis-id.html">qui. Deleniti id id aperiam necessitatibus recusandae.</a></a> velit voluptatum nesciunt. ut porro minus dolorem sint ullam. aliquid quia Eaque id natus sequi consectetur <a title="Aut ut eum molestiae optio sint omnis ratione." href="http://www.conroy.info/sapiente-placeat-est-voluptatum-delectus">est voluptatem. Nisi voluptas dicta impedit. Deleniti</a> tenetur molestias architecto rem magni <a title="Quia id voluptatem corporis." href="https://www.connelly.com/nihil-animi-nesciunt-vero-sint-et-est">Sequi deserunt animi aut</a> quia doloribus enim. Aut omnis facilis odio ad. Quidem est repellat. optio nihil sed.</p></blockquote>\n<p><img class="alignleft" alt="Qui omnis iste" src="https://js1.10up.com/wp-content/uploads/2020/05/348bed06-c351-381e-8ed9-1587fcc172d8.png"></p>\n<ul>\n<li>Aut enim asperiores sed dicta</li>\n<li>Maiores</li>\n</ul>\n<h3>Sit quia velit voluptas. Aliquid deserunt qui aspernatur soluta ullam quidem. Ab nihil quasi optio ut ex</h3>\n<p><img alt="Minima" src="https://js1.10up.com/wp-content/uploads/2020/05/41dfb8fb-ae61-390a-b53f-1f98e23f462f.jpg"></p>\n<hr>\n',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>Fugit nemo placeat eos aliquam repellendus. Qui maxime quam hic sit Maxime atque animi et nihil et. Distinctio adipisci doloremque placeat consectetur aut blanditiis sint</p>\n',
      protected: false,
    },
    author: 3,
    featured_media: 0,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [1],
    tags: [],
    titleImage:
      'https://js1.10up.com/wp-content/uploads/2020/05/88670812-1b59-3095-9c92-8ae541f3b6d2.jpg',
    _links: {
      self: [
        {
          href: 'https://js1.10up.com/wp-json/wp/v2/posts/57',
        },
      ],
      collection: [
        {
          href: 'https://js1.10up.com/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'https://js1.10up.com/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'https://js1.10up.com/wp-json/wp/v2/users/3',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'https://js1.10up.com/wp-json/wp/v2/comments?post=57',
        },
      ],
      'version-history': [
        {
          count: 0,
          href: 'https://js1.10up.com/wp-json/wp/v2/posts/57/revisions',
        },
      ],
      'wp:attachment': [
        {
          href: 'https://js1.10up.com/wp-json/wp/v2/media?parent=57',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://js1.10up.com/wp-json/wp/v2/categories?post=57',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'https://js1.10up.com/wp-json/wp/v2/tags?post=57',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
];

class BlogsScreen extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.getBlogs();
  }

  navigateToBlog = (id) => {
    const { navigation, blogs } = this.props;

    const blog = blogs.find((item) => item.id === id);

    navigation.navigate(ROUTES.SCREENS.BLOG, {
      title: blog.title,
      htmlContent: blog.content,
    });
  };

  render() {
    return (
      <BlogList
        onBlogSelect={this.navigateToBlog}
        blogsArray={this.props.blogs}
      />
    );
  }
}

export default withNavigation(BlogsScreen);
